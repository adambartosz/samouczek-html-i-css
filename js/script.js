(() => {
    document.addEventListener("DOMContentLoaded", () => {

        const OPCJE = {
            menuOtwartePoDomyslnie: true,
            animacjaWejscia: true,
            babelki: true,
            zapamietajMenu: true,
        };

        const isIndexPage =
            location.pathname.endsWith("index.html") ||
            location.pathname === "/" ||
            location.pathname.endsWith("/");

        const trybZnacznik = document.body.classList.contains("znacznik");
        const trybWlasciwosc = document.body.classList.contains("wlasciwosc");

        (() => {
            const s = document.createElement("style");
            s.textContent = "*{transition:none!important}";
            document.head.appendChild(s);
            window.addEventListener("load", () => requestAnimationFrame(() => s.remove()));
        })();

        const metaDane = {
            viewport: "width=device-width, initial-scale=1.0",
            author: "Adam Bartosz",
            robots: "index, follow",
            generator: "Visual Studio Code",
            keywords: "HTML, CSS, samouczek, technikum",
            description: "Samouczek HTML i CSS - technikum klasa 1",
            copyright: "Adam Bartosz"
        };
        for (const name in metaDane) {
            if (document.querySelector(`meta[name="${name}"]`)) continue;
            const m = document.createElement("meta");
            m.name = name;
            m.content = metaDane[name];
            document.head.appendChild(m);
        }

        const originalElements = [...document.body.children].filter(el => el.tagName !== "SCRIPT");
        const layout = document.createElement("div");
        layout.className = "layout";
        const container = document.createElement("main");
        container.className = "container";
        originalElements.forEach(el => container.appendChild(el));
        layout.appendChild(container);
        document.body.appendChild(layout);

        const nav = document.createElement("nav");
        layout.appendChild(nav);

        const header = document.createElement("header");
        header.textContent = document.title;
        layout.prepend(header);

        const buttonNav = document.createElement("button");
        buttonNav.textContent = "☰";
        buttonNav.className = "toggle";
        buttonNav.setAttribute("aria-label", "Otwórz lub zamknij menu");
        document.body.prepend(buttonNav);

        const foot = document.createElement("footer");
        foot.textContent = "Adam Bartosz – Samouczek HTML i CSS";
        layout.appendChild(foot);






        const kategorie = [
            {
                nazwa: "Internet i HTML",
                dzieci: [
                    {
                        nazwa: "Teoria internetu",
                        linki: [
                            { title: "Strona główna", url: "../index.html" },
                            { title: "HTML - wprowadzenie", url: "wstep.html" },
                            { title: "Strona a witryna", url: "strona-witryna.html" },
                            { title: "Portal i wortal", url: "portal.html" },
                            { title: "W3Schools", url: "w3schools.html" },
                            { title: "Standardy HTML i W3C", url: "standardy.html" },
                        ]
                    },
                    {
                        nazwa: "Narzędzia",
                        linki: [
                            { title: "Walidator HTML", url: "walidator.html" },
                            { title: "Lorem Ipsum", url: "lorem.html" },
                            { title: "XML", url: "xml.html" },
                            { title: "GitHub Pages", url: "github.html" },
                        ]
                    },
                    {
                        nazwa: "Składnia HTML",
                        linki: [
                            { title: "DOCTYPE", url: "doctype.html" },
                            { title: "Składnia HTML", url: "syntax.html" },
                            { title: "Rodzice, dzieci, wnukowie", url: "drzewo.html" },
                            { title: "Zasady tworzenia stron", url: "zasady.html" },
                            { title: "Blokowe i liniowe", url: "blokowe-liniowe.html" },
                        ]
                    },
                ]
            },
            {
                nazwa: "Znaczniki HTML",
                dzieci: [
                    {
                        nazwa: "Struktura strony",
                        linki: [
                            { title: "html, head, body", url: "struktura.html" },
                            { title: "meta", url: "meta.html" },
                            { title: "div", url: "div.html" },
                            { title: "span", url: "span.html" },
                            { title: "Semantyka HTML5", url: "semantyka.html" },
                            { title: "Zasady dostępności", url: "dostępność.html" },
                        ]
                    },
                    {
                        nazwa: "Tekst",
                        dzieci: [
                            {
                                nazwa: "Nagłówki i akapity",
                                linki: [
                                    { title: "h1 - h6", url: "h1h6.html" },
                                    { title: "p", url: "p.html" },
                                    { title: "br", url: "br.html" },
                                    { title: "pre", url: "pre.html" },
                                ]
                            },
                            {
                                nazwa: "Formatowanie",
                                linki: [
                                    { title: "strong", url: "strong.html" },
                                    { title: "em", url: "em.html" },
                                    { title: "b", url: "b.html" },
                                    { title: "i", url: "i.html" },
                                    { title: "small", url: "small.html" },
                                    { title: "del", url: "del.html" },
                                    { title: "ins", url: "ins.html" },
                                    { title: "sub", url: "sub.html" },
                                    { title: "sup", url: "sup.html" },
                                ]
                            },
                            {
                                nazwa: "Cytaty i kod",
                                linki: [
                                    { title: "cite", url: "cite.html" },
                                    { title: "q", url: "q.html" },
                                    { title: "code", url: "code.html" },
                                    { title: "blockquote", url: "blockquote.html" },
                                ]
                            },
                        ]
                    },
                    {
                        nazwa: "Listy",
                        linki: [
                            { title: "ul", url: "ul.html" },
                            { title: "ol", url: "ol.html" },
                            { title: "li", url: "li.html" },
                            { title: "Zagnieżdżanie list", url: "listy-zagniezdzone.html" },
                            { title: "dl", url: "dl.html" },
                            { title: "dt", url: "dt.html" },
                            { title: "dd", url: "dd.html" },
                        ]
                    },
                    {
                        nazwa: "Tabele",
                        dzieci: [
                            {
                                nazwa: "Podstawy tabel",
                                linki: [
                                    { title: "table", url: "table.html" },
                                    { title: "tr", url: "tr.html" },
                                    { title: "th", url: "th.html" },
                                    { title: "td", url: "td.html" },
                                    { title: "Tabele zagnieżdżone", url: "tabele-zagniezdzone.html" },
                                ]
                            },
                            {
                                nazwa: "Grupy wierszy",
                                linki: [
                                    { title: "thead", url: "thead.html" },
                                    { title: "tbody", url: "tbody.html" },
                                    { title: "tfoot", url: "tfoot.html" },
                                    { title: "style w tabeli", url: "style-tabela.html" },
                                ]
                            },
                        ]
                    },
                    {
                        nazwa: "Linki i media",
                        dzieci: [
                            {
                                nazwa: "Linki i obrazki",
                                linki: [
                                    { title: "a", url: "a.html" },
                                    { title: "Adresy wzgl. i bezwzgl.", url: "adresy.html" },
                                    { title: "Mapa odsyłaczy", url: "mapa-odsylacze.html" },
                                    { title: "img", url: "img.html" },
                                    { title: "figure i figcaption", url: "figure.html" },
                                    { title: "picture", url: "picture.html" },
                                ]
                            },
                            {
                                nazwa: "Multimedia i SVG",
                                dzieci: [
                                    {
                                        nazwa: "Multimedia",
                                        linki: [
                                            { title: "audio", url: "audio.html" },
                                            { title: "video", url: "video.html" },
                                            { title: "source", url: "source.html" },
                                        ]
                                    },
                                    {
                                        nazwa: "SVG",
                                        linki: [
                                            { title: "svg", url: "svg.html" },
                                            { title: "circle", url: "circle.html" },
                                            { title: "rect", url: "rect.html" },
                                            { title: "polygon", url: "polygon.html" },
                                            { title: "line", url: "line.html" },
                                        ]
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        nazwa: "Formularze",
                        dzieci: [
                            {
                                nazwa: "Elementy formularza",
                                linki: [
                                    { title: "form", url: "form.html" },
                                    { title: "input", url: "input.html" },
                                    { title: "label", url: "label.html" },
                                    { title: "textarea", url: "textarea.html" },
                                ]
                            },
                            {
                                nazwa: "Listy wyboru i grupy",
                                linki: [
                                    { title: "select i option", url: "select.html" },
                                    { title: "optgroup", url: "optgroup.html" },
                                    { title: "fieldset i legend", url: "fieldset.html" },
                                    { title: "datalist", url: "datalist.html" },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                nazwa: "CSS",
                dzieci: [
                    {
                        nazwa: "Podstawy",
                        dzieci: [
                            {
                                nazwa: "Wprowadzenie do CSS",
                                linki: [
                                    { title: "CSS - wprowadzenie", url: "css-wstep.html" },
                                    { title: "Typy stylów", url: "typy-stylow.html" },
                                    { title: "link rel=stylesheet", url: "link-css.html" },
                                    { title: "Dziedziczenie", url: "dziedziczenie.html" },
                                ]
                            },
                            {
                                nazwa: "Selektory",
                                linki: [
                                    { title: "Selektory podstawowe", url: "selektory.html" },
                                    { title: "Selektor #id, .class", url: "selektor-id.html" },
                                    { title: "Selektor atrybutu", url: "selektor-atrybutu.html" },
                                    { title: "Pseudoklasy", url: "pseudoklasy.html" },
                                    { title: "Pseudoelementy", url: "pseudoelementy.html" },
                                    { title: "Hierarchia selektorów", url: "hierarchia-css.html" },
                                    { title: "Dalsze selektory", url: "selektory-dalsze.html" },
                                ]
                            },
                        ]
                    },
                    {
                        nazwa: "Tekst i czcionki",
                        linki: [
                            { title: "Czcionki - podstawy", url: "czcionki-info.html" },
                            { title: "font-family", url: "font-family.html" },
                            { title: "font-style", url: "font-style.html" },
                            { title: "Czcionki z Google Fonts", url: "czcionki.html" },
                            { title: "text-decoration", url: "text-decoration.html" },
                            { title: "text-align", url: "text-align.html" },
                        ]
                    },
                    {
                        nazwa: "Box model",
                        linki: [
                            { title: "Jednostki CSS", url: "units.html" },
                            { title: "Model pudełkowy", url: "box-model.html" },
                            { title: "margin i padding", url: "margin-padding.html" },
                            { title: "border", url: "border.html" },
                            { title: "height i width", url: "wymiary.html" },
                            { title: "min-width i max-width", url: "min-max.html" },
                        ]
                    },
                    {
                        nazwa: "Tło i kolory",
                        linki: [
                            { title: "Kolory w CSS", url: "kolory.html" },
                            { title: "background-image", url: "background-image.html" },
                            { title: "Właściwości tła", url: "tlo.html" },
                        ]
                    },
                    {
                        nazwa: "Layout",
                        dzieci: [
                            {
                                nazwa: "Podstawy layoutu",
                                linki: [
                                    { title: "float", url: "float.html" },
                                    { title: "overflow", url: "overflow.html" },
                                    { title: "Pozycjonowanie", url: "pozycjonowanie.html" },
                                ]
                            },
                            {
                                nazwa: "Flexbox i Grid",
                                linki: [
                                    { title: "Flexbox", url: "flex.html" },
                                    { title: "Grid", url: "grid.html" },
                                ]
                            },
                            {
                                nazwa: "Menu",
                                linki: [
                                    { title: "Menu poziome", url: "menu-poziome.html" },
                                    { title: "Menu pionowe", url: "menu-pionowe.html" },
                                    { title: "Menu rozwijane", url: "menu-rozwijane.html" },
                                ]
                            },
                        ]
                    },
                    {
                        nazwa: "Zaawansowane",
                        linki: [
                            { title: "Responsywność", url: "responsywnosc.html" },
                            { title: "Animacje CSS", url: "animacje.html" },
                            { title: "Gradienty", url: "gradienty.html" },
                        ]
                    },
                ]
            },
            { nazwa: "Zwiń ▲" }
        ];




        const KLUCZ_SCIEZKI = "navSciezka";

        function zapiszSciezke(s) {
            localStorage.setItem(KLUCZ_SCIEZKI, JSON.stringify(s));
        }

        function odczytajSciezke() {
            try {
                const zapisane = localStorage.getItem(KLUCZ_SCIEZKI);
                if (!zapisane) return [0];
                const parsed = JSON.parse(zapisane);
                if (!Array.isArray(parsed)) return [0];
                let wezel = { dzieci: kategorie };
                for (const i of parsed) {
                    if (!wezel.dzieci || !wezel.dzieci[i]) return [0];
                    wezel = wezel.dzieci[i];
                }
                return parsed;
            } catch (e) {
                return [0];
            }
        }

        let sciezka = odczytajSciezke();

        const navKategorie = document.createElement("div");
        navKategorie.className = "nav-kategorie";
        nav.appendChild(navKategorie);

        const navLinki = document.createElement("div");
        navLinki.className = "nav-linki";
        nav.appendChild(navLinki);

        function pobierzWezel(indeksy) {
            let wezel = { dzieci: kategorie };
            for (const i of indeksy) wezel = wezel.dzieci[i];
            return wezel;
        }

        function renderujNav() {
            navKategorie.innerHTML = "";
            let aktualny = { dzieci: kategorie };
            const poziomy = [aktualny];
            for (const i of sciezka) {
                aktualny = aktualny.dzieci[i];
                if (aktualny && aktualny.dzieci) poziomy.push(aktualny);
                else break;
            }
            poziomy.forEach((wezel, poziom) => {
                const rzad = document.createElement("div");
                rzad.className = "nav-rzad";
                wezel.dzieci.forEach((dziecko, i) => {
                    const aktywnyIndeks = sciezka[poziom] ?? -1;
                    const btn = document.createElement("button");
                    btn.textContent = dziecko.nazwa;
                    if (dziecko.nazwa === "Zwiń ▲") btn.id = "zwinButton";
                    btn.className = "nav-kat-btn" + (i === aktywnyIndeks ? " aktywna" : "");
                    btn.addEventListener("click", () => {
                        sciezka = sciezka.slice(0, poziom);
                        sciezka.push(i);
                        zapiszSciezke(sciezka);
                        renderujNav();
                        renderujLinki();
                    });
                    rzad.appendChild(btn);
                });
                navKategorie.appendChild(rzad);
            });
        }

        function renderujLinki() {
            navLinki.innerHTML = "";
            const wezel = pobierzWezel(sciezka);
            if (!wezel.linki) return;
            const ul = document.createElement("ul");
            const obecnyPlik = location.pathname.split("/").pop() || "index.html";
            wezel.linki.forEach(link => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.textContent = link.title;
                a.href = isIndexPage
                    ? (link.url === "../index.html" ? "#" : "cite/" + link.url)
                    : link.url;
                const nazwaPliku = link.url.split("/").pop();
                if (nazwaPliku === obecnyPlik) a.classList.add("aktywny-link");
                li.appendChild(a);
                ul.appendChild(li);
            });
            navLinki.appendChild(ul);
        }




        const NAGLOWKI_ZNACZNIK = [
            "Opis",
            "Zastosowanie",
            "Atrybuty",
            "Znaczenie semantyczne",
            "Właściwości znacznika",
            "Interaktywny symulator"
        ];

        const NAGLOWKI_WLASCIWOSC = [
            "Opis",
            "Składnia i wartości",
            "Domyślna wartość",
            "Dziedziczenie",
            "Przykłady użycia",
            "Interaktywny symulator"
        ];

        function dodajNaglowkiSekcji(lista) {
            document.querySelectorAll("section").forEach((sek, i) => {
                if (!lista[i]) return;
                if (sek.querySelector("h2")) return;
                const h2 = document.createElement("h2");
                h2.textContent = lista[i];
                sek.prepend(h2);
            });
        }

        function sprawdzBrakAtrybutow() {
            const sekcje = document.querySelectorAll("section");
            if (sekcje.length < 3) return;
            const sek = sekcje[2];
            const zawartosc = sek.innerHTML.replace(/<h2[^>]*>.*?<\/h2>/i, "").trim();
            if (zawartosc === "") {
                const info = document.createElement("p");
                info.textContent = "Ten znacznik nie ma własnych atrybutów (poza globalnymi: class, id, style, title).";
                info.style.cssText = "color:rgba(0,0,0,0.45);font-style:italic;text-align:center;";
                sek.appendChild(info);
            }
        }

        if (trybZnacznik) {
            dodajNaglowkiSekcji(NAGLOWKI_ZNACZNIK);
            sprawdzBrakAtrybutow();
        } else if (trybWlasciwosc) {
            dodajNaglowkiSekcji(NAGLOWKI_WLASCIWOSC);
        }




        function inicjujMenu() {
            const KLUCZ_MENU = "menuOpen";
            let otwarte;
            if (OPCJE.zapamietajMenu) {
                const zapisane = localStorage.getItem(KLUCZ_MENU);
                otwarte = zapisane === null ? OPCJE.menuOtwartePoDomyslnie : zapisane === "true";
            } else {
                otwarte = OPCJE.menuOtwartePoDomyslnie;
            }
            if (otwarte) layout.classList.add("open");
            buttonNav.addEventListener("click", () => {
                layout.classList.toggle("open");
                if (OPCJE.zapamietajMenu) {
                    localStorage.setItem(KLUCZ_MENU, layout.classList.contains("open"));
                }
            });
        }




        function inicjujBabelki() {
            if (!OPCJE.babelki) return;
            const warstwa = document.createElement("div");
            warstwa.className = "bubble-layer";
            document.body.appendChild(warstwa);
            function spawn(x) {
                if (warstwa.children.length >= 70) return;
                const b = document.createElement("div");
                const rozmiar = Math.random() * 50 + 10;
                const czas = Math.random() * 6 + 6;
                const rot = Math.random() * 360;
                const poz = x ?? Math.random() * 100;
                b.className = "bubble";
                b.style.cssText =
                    "left:" + poz + "vw;" +
                    "width:" + rozmiar + "px;" +
                    "height:" + rozmiar + "px;" +
                    "animation-duration:" + czas + "s;" +
                    "transform:rotate(" + rot + "deg);";
                warstwa.appendChild(b);
                b.addEventListener("animationend", () => b.remove(), { once: true });
                if (Math.random() > 0.97) {
                    const ile = Math.floor(Math.random() * 10);
                    for (let j = 0; j < ile; j++) spawn(poz + (Math.random() - 0.5) * 2);
                }
            }
            setInterval(() => spawn(Math.random() * 100), 150);
        }




        function inicjujAnimacje() {
            if (!OPCJE.animacjaWejscia) return;
            const els = [layout, header, nav, foot];
            els.forEach(el => { if (el) el.classList.add("intro-hidden"); });
            [
                { el: layout, delay: 0 },
                { el: header, delay: 150 },
                { el: nav, delay: 300 },
                { el: foot, delay: 450 }
            ].forEach(({ el, delay }) => {
                if (!el) return;
                setTimeout(() => {
                    el.style.transition = "all 0.8s cubic-bezier(0.22,1,0.36,1)";
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                    el.style.filter = "blur(0)";
                }, delay);
            });
            setTimeout(() => {
                els.forEach(el => {
                    if (!el) return;
                    el.classList.remove("intro-hidden");
                    el.style.transition = el.style.opacity = el.style.transform = el.style.filter = "";
                });
            }, 1250);
        }

        function animujSekcje() {
            document.querySelectorAll("section").forEach((el, i) => {
                setTimeout(() => el.classList.add("show"), i * 50 / Math.log(i + 2));
            });
        }

        renderujNav();
        renderujLinki();
        inicjujMenu();
        inicjujBabelki();

        if (document.readyState === "complete") {
            inicjujAnimacje();
            animujSekcje();
        } else {
            window.addEventListener("load", () => {
                inicjujAnimacje();
                animujSekcje();
            });
        }

    });
})();
