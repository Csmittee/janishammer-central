#!/usr/bin/env python3
import os
import re

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

# ===== READ INJECTOR FILES =====
def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

# ===== EMBED INJECTORS INTO HTML =====
def embed_injectors(html_path, core_js, config_js):
    if not os.path.exists(html_path):
        print(f"⚠️ Skipping {html_path} (not found)")
        return False
    
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace markers with injector code
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
    print("🚀 Embedding injectors into all HTML files...")
    
    core_js = read_file(INJECTOR_FILES["core"])
    config_js = read_file(INJECTOR_FILES["config"])
    
    updated = 0
    for repo, files in REPOS.items():
        for file in files:
            path = os.path.join(repo, file)
            if embed_injectors(path, core_js, config_js):
                updated += 1
    
    print(f"🎉 Done! Updated {updated} files.")

if __name__ == "__main__":
    main()
