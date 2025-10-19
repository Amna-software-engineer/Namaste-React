
# Episode 2

## 🧩 What is NPM?
NPM is a package registry and a package manager for JavaScript.  
It stores and distributes packages (modules) that projects can depend on.  
It is not literally "Node Package Manager" — it's the standard repository and tooling for packages.

---

## 📄 package.json
`package.json` is the configuration file for your project and npm.  
It records project metadata and the exact packages (dependencies) your project uses.

- Keep `package.json` and `package-lock.json` in version control.
- Do not commit `node_modules/`.

`package-lock.json` records exact installed versions (including transitive dependencies), so installs are deterministic.
---

## 🧱 Bundler
A bundler (like Webpack, Parcel, or Vite) combines your modules into optimized bundles for production.  
Bundlers handle tasks like minification, code-splitting, and asset optimization.

---

## ⚡ Advantages of Parcel
- Fast dev builds
- Local dev server with HMR (Hot Module Replacement)
- File watching implemented in C++ for speed
- Caching for faster rebuilds
- Image optimization
- Minification and compression
- Consistent hashing & cache-busting
- Code splitting
- Differential bundling (support for older browsers)
- Friendly error messages
- HTTPS support in dev server
- Tree shaking (removes unused code)
- Separate dev and production bundles

---

## ⚙️ Types of dependencies
1. devDependencies — required only for development (build tools, linters, test runners).  
2. dependencies — required at runtime (used in production).

Install examples:
```bash
# Install Parcel as a devDependency
npm install -D parcel

# Install runtime dependencies
npm install react react-dom
```

Use npx to run a package without installing it globally:
```bash
npx parcel index.html
```

---

## 🔢 Version ranges in package.json
- ^1.2.3 (caret) — allows non-breaking minor/patch upgrades (e.g., 1.2.3 → 1.3.0 or 1.2.4, but not 2.0.0).
- ~1.2.3 (tilde) — allows patch upgrades (e.g., 1.2.3 → 1.2.4) but not minor (1.3.0).



---

## 🔁 Transitive dependencies
Packages depend on other packages, which depend on others. These are transitive dependencies and are recorded in `package-lock.json` and installed into `node_modules/`.

---

## ☁️ CDN vs local packages
Using a CDN for libraries can be convenient, but relying on local packages (via npm) gives you better control and reproducibility. Changing a library version with a CDN means updating the CDN link.

---

## 🧩 Modules in the browser
To use ES modules in the browser, add type="module" to your script:
```html
<script type="module" src="./index.js"></script>
```

---