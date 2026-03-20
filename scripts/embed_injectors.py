#!/usr/bin/env python3
import os
import re
import subprocess

# ===== CONFIGURATION =====
REPOS = {
    "janishammer-home": ["index.html", "blog.html", "contact.html"],
    "janis-flow": ["index.html"],
    "daje-queencatcher": ["index.html"],
    "jade-coffee": ["index.html"]
}

INJECTOR_FILES = {
    "core": "js/injector-core-v2.5.js",
    "config": "js/injector-config-v2.3.js"
}

# ===== GET CHANGED FILES FROM COMMIT =====
def get_changed_files():
    # If running locally, return None (update all)
    if not os.environ.get('GITHUB_ACTIONS'):
        return None
    
    result = subprocess.run(['git', 'diff', '--name-only', 'HEAD~1', 'HEAD'], 
                            capture_output=True, text=True)
    return result.stdout.splitlines()

# ===== READ INJECTOR FILES =====
def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

# ===== EMBED INJECTORS INTO HTML =====
def embed_injectors(html_path, core_js, config_js):
    if not os.path.exists(html_path):
        return False
    
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_injectors = f"""<!-- INJECTOR_START -->
<script>
{config_js}
</script>
<script>
{core_js}
</script>
<!-- INJECTOR_END -->"""
    
    content = re.sub(
        r'<!-- INJECTOR_START -->.*?<!-- INJECTOR_END -->',
        new_injectors,
        content,
        flags=re.DOTALL
    )
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✅ Updated {html_path}")
    return True

# ===== MAIN =====
def main():
    print("🚀 Embedding injectors...")
    
    changed_files = get_changed_files()
    if changed_files:
        print(f"📝 Changed files: {changed_files}")
    
    core_js = read_file(INJECTOR_FILES["core"])
    config_js = read_file(INJECTOR_FILES["config"])
    
    updated = 0
    
    # Check if injector files changed
    injector_changed = False
    if changed_files:
        for f in changed_files:
            if f.startswith('js/injector-'):
                injector_changed = True
                break
    
    for repo, files in REPOS.items():
        for file in files:
            path = os.path.join(repo, file)
            
            # Skip if this file wasn't changed (unless injector changed)
            if changed_files and not injector_changed and path not in changed_files:
                continue
            
            if embed_injectors(path, core_js, config_js):
                updated += 1
    
    if updated == 0:
        print("📭 No files needed updating")
    else:
        print(f"🎉 Done! Updated {updated} files.")

if __name__ == "__main__":
    main()
