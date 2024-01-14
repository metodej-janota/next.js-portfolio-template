# Next.js Portfolio Template 🇬🇧

### Structure of the Next.js Portfolio Template

Here is a basic description of the project structure for the Next.js portfolio:

```
├── README.md</br>
├── package.json</br>
├── next.config.js</br>
├── .gitignore</br>
├── public</br>
│ㅤㅤ├── favicon.ico</br>
│ㅤㅤ└── images</br>
├── styles
│ㅤㅤ├── globals.css</br>
│ㅤㅤ└── Home.module.css</br>
├── pages</br>
│ㅤㅤ├── _app.js</br>
│ㅤㅤ├── index.js</br>
│ㅤㅤ├── about.js</br>
│ㅤㅤ├── projects.js</br>
│ㅤㅤ└── contact.js</br>
└── components</br>
ㅤㅤㅤ├── header.js</br>
ㅤㅤㅤ├── footer.js</br>
ㅤㅤㅤ├── layout.js</br>
ㅤㅤㅤ├── projectCard.js</br>
ㅤㅤㅤ└── contactForm.js</br>
```

### index.tsx

The imported components are:

- `Head` from the `next/head` module, which is used to set the page title, meta tags, and other head elements.
- `Object3D` from the `./components/Sections/Object3D` module, which represents a 3D object section.
- `Navigation` from the `./components/Main/Navigation` module, which represents the website's navigation bar.
- `Intro` from the `./components/Main/Intro` module, which represents the introductory section of the website.
- `Footer` from the `./components/Main/Footer` module, which represents the website's footer.

### Components you can use from `./components/library`

`<MotionLink href="#">Bio</MotionLink>`
`<MotionExternalLink href="www."></MotionExternalLink>`

# Šablona portfolia Next.js 🇨🇿

### Struktura šablony portfolia Next.js

Zde je základní popis struktury projektu pro portfolio Next.js:

```
├── README.md</br>
├── package.json</br>
├── next.config.js</br>
├── .gitignore</br>
├── public</br>
│ㅤㅤ├── favicon.ico</br>
│ㅤㅤ└── images</br>
├── styles
│ㅤㅤ├── globals.css</br>
│ㅤㅤ└── Home.module.css</br>
├── pages</br>
│ㅤㅤ├── _app.js</br>
│ㅤㅤ├── index.js</br>
│ㅤㅤ├── about.js</br>
│ㅤㅤ├── projects.js</br>
│ㅤㅤ└── contact.js</br>
└── components</br>
ㅤㅤㅤ├── header.js</br>
ㅤㅤㅤ├── footer.js</br>
ㅤㅤㅤ├── layout.js</br>
ㅤㅤㅤ├── projectCard.js</br>
ㅤㅤㅤ└── contactForm.js</br>
```

### index.tsx

Importované komponenty jsou:

- `Head` z modulu `next/head`, který se používá pro nastavení titulku stránky, meta tagů a dalších prvků hlavičky.
- `Object3D` z modulu `./components/Sections/Object3D`, který představuje sekci s 3D objektem.
- `Navigation` z modulu `./components/Main/Navigation`, který představuje navigační lištu webu.
- `Intro` z modulu `./components/Main/Intro`, který představuje úvodní sekci webu.
- `Footer` z modulu `./components/Main/Footer`, který představuje patičku webu.

### Komponenty, které můžete použít z `./components/library`

`<MotionLink href="#">Bio</MotionLink>`
`<MotionExternalLink href="www."></MotionExternalLink>`
