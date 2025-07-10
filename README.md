# 🌀 Tailwind Branch

---

This is the **Tailwind CSS** version of the Sprint 1 layout refactor for ITACADEMY.  
The goal of this branch is to rebuild the layout using a **utility-first approach** with Tailwind.

---

## 🧠 Goal

Refactor the layout using **Tailwind CSS**:

- Use utility classes instead of custom CSS
- Improve development speed and maintainability
- Build mobile-first and responsive UI
- Minimize CSS file size with Tailwind’s build process

---

## 🚀 Getting Started

### 1. Clone the Repo and Switch to This Branch

```bash
git clone https://github.com/KevinLarriega98/S1.2-ITAcademy.git
cd S1.2-ITAcademy
git checkout feature/Tailwind
```

---

### 2. Install Dependencies

Make sure you have Node.js installed. Then install the packages:

```bash
npm install
```

---

### 3. Run Tailwind with Live Reload

Use your build tool (e.g. Vite, PostCSS, or Tailwind CLI) to start the project.  
Assuming you're using Tailwind CLI:

```bash
npx tailwindcss -i ./input.css -o ./src/output.css --watch
```

> 📁 `input.css` is where Tailwind is imported. `output.css` is the compiled version.

## 🛠 Technologies Used

- Tailwind CSS
- HTML5
- JavaScript (for menu toggle and tabs navigation)
- Node.js + npm

---

## 🔗 Related Branches

- [`Vanilla`](https://github.com/KevinLarriega98/S1.2-ITAcademy/tree/feature/vanilla)
- [`SASS`](https://github.com/KevinLarriega98/S1.2-ITAcademy/tree/feature/SASS)