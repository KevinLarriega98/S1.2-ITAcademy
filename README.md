# 💅 SASS Branch

---

This is the **SASS** version of the Sprint 1 layout refactor for ITACADEMY.  
The goal of this branch is to rebuild the layout using **SCSS** with a structured and scalable architecture.

---

## 🧠 Goal

Refactor the original layout using **SASS (SCSS syntax)** for:

- Modular structure via partials
- Reusable styles (variables, mixins)
- Easier maintenance and scalability

---

## 🚀 Getting Started

### 1. Clone the Repo and Switch to This Branch

```bash
git clone https://github.com/KevinLarriega98/S1.2-ITAcademy.git
cd S1.2-ITAcademy
git checkout feature/SASS
```

---

### 2. Compile SCSS to CSS

Make sure SASS is installed:

```bash
npm install -g sass
```

Then compile:

```bash
sass scss/styles.scss style.css --watch
```

> 📝 `styles.scss` is the root file that imports all other partials.

---

## 🛠 Technologies Used

- HTML5
- SCSS (SASS)
- CSS3 (compiled output)
- JavaScript (basic DOM logic)

---

## 🔗 Related Branches

- [`Vanilla`](https://github.com/KevinLarriega98/S1.2-ITAcademy/tree/feature/vanilla)
- [`Tailwind`](https://github.com/KevinLarriega98/S1.2-ITAcademy/tree/feature/Tailwind)