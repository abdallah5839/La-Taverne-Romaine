const { useState, useEffect, useRef, useLayoutEffect } = React;

/* ---------- Image library (Unsplash) ---------- */
const IMG = {
  hero:   "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80", // warm restaurant interior
  heroAlt:"https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80",
  pasta:  "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1400&q=80",
  pizza:  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1400&q=80",
  steak:  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
  duck:   "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=1400&q=80",
  fish:   "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1400&q=80",
  dessert:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=80",
  wine:   "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=80",
  chef:   "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1400&q=80",
  interior1:"https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80",
  interior2:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
  table:  "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1400&q=80",
  bread:  "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=80",
  carpaccio:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1400&q=80",
  tiramisu:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1400&q=80",
  glass:  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=80",
};

/* ---------- Small primitives ---------- */
const Eyebrow = ({ children, className="" }) => (
  <div className={"flex items-center gap-3 text-[11px] uppercase tracking-micro " + className}>
    <span className="inline-block w-6 h-px bg-[#A88746]/70"></span>
    <span>{children}</span>
  </div>
);

const Hairline = ({ className="" }) => <div className={"hairline " + className} />;

const StarRow = ({ tone="#A88746" }) => (
  <div className="flex gap-1" style={{color:tone}}>
    {[0,1,2,3,4].map(i => (
      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2z"/></svg>
    ))}
  </div>
);

/* ============================================================
   DESKTOP
============================================================ */
function Desktop(){
  return (
    <div style={{width:1440}} className="bg-[#F4EFE6] text-[#1A1714] mx-auto">
      {/* TOP UTILITY BAR */}
      <div className="bg-[#1A1714] text-[#EDE5D6]/80 text-[11px] tracking-micro uppercase">
        <div className="max-w-[1280px] mx-auto px-12 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>Boulevard Lagunaire · Abidjan Plateau</span>
            <span className="text-[#A88746]">·</span>
            <span>Ouvert midi &amp; soir — fermé lundi</span>
          </div>
          <div className="flex items-center gap-6">
            <span>+225 27 20 21 89 51</span>
            <span className="text-[#A88746]">·</span>
            <span>FR / EN</span>
          </div>
        </div>
      </div>

      {/* NAV */}
      <header className="bg-[#F4EFE6] border-b border-[#A88746]/15">
        <div className="max-w-[1280px] mx-auto px-12 h-24 flex items-center justify-between">
          <nav className="flex items-center gap-9 text-[12px] tracking-mini uppercase font-medium">
            <a className="hover:text-[#B4502B]">La Maison</a>
            <a className="hover:text-[#B4502B]">La Carte</a>
            <a className="hover:text-[#B4502B]">Cave</a>
            <a className="hover:text-[#B4502B]">Galerie</a>
          </nav>
          <a className="flex flex-col items-center">
            <span className="text-[10px] tracking-micro uppercase brass-text">Depuis 1987</span>
            <span className="font-display text-[28px] leading-none -mt-0.5">La Taverne <span className="font-display-it">Romaine</span></span>
          </a>
          <div className="flex items-center gap-6 text-[12px] tracking-mini uppercase font-medium">
            <a>Livraison</a>
            <a>Contact</a>
            <a className="inline-flex items-center gap-2 bg-[#1A1714] text-[#F4EFE6] px-5 h-11 rounded-full">
              <span>Réserver</span>
              <span className="brass-text">→</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-[#1A1714] text-[#EDE5D6] overflow-hidden">
        <img src={IMG.hero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-55 photo-warm" />
        <div className="absolute inset-0" style={{background:"linear-gradient(180deg,rgba(26,23,20,.6) 0%,rgba(26,23,20,.35) 40%,rgba(26,23,20,.75) 100%)"}} />
        <div className="absolute inset-0 vignette" />
        <div className="relative max-w-[1280px] mx-auto px-12 pt-20 pb-28">
          {/* top row */}
          <div className="flex items-center justify-between text-[11px] tracking-micro uppercase text-[#EDE5D6]/70">
            <Eyebrow className="text-[#C9A86B]">Cuisine Franco-Italienne · Abidjan</Eyebrow>
            <div className="flex items-center gap-3">
              <StarRow />
              <span>Recommandé par Guide Michelin · Petit Futé · TripAdvisor</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 mt-16">
            <div className="col-span-8">
              <h1 className="font-display text-[124px] leading-[0.92] tracking-tight">
                La table où <br/>
                <span className="font-display-it brass-text">Rome</span> rencontre <br/>
                <span className="font-display-it">Paris</span>.
              </h1>
              <p className="mt-10 max-w-[520px] text-[16px] leading-[1.7] text-[#EDE5D6]/85 font-light">
                Depuis bientôt quarante ans, la Taverne Romaine compose une carte d'auteur entre
                tradition française et trattoria romaine — au cœur du Plateau, à deux pas du Pullman.
              </p>

              <div className="mt-12 flex items-center gap-5">
                <a className="inline-flex items-center gap-3 bg-[#B4502B] hover:bg-[#8E3A1E] text-[#F4EFE6] px-7 h-14 rounded-full text-[13px] tracking-mini uppercase font-medium shadow-soft">
                  Réserver une table
                  <span>→</span>
                </a>
                <a className="inline-flex items-center gap-3 text-[#EDE5D6] px-2 h-14 text-[13px] tracking-mini uppercase">
                  <span className="w-10 h-10 rounded-full border border-[#C9A86B]/60 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#C9A86B"><path d="M8 5v14l11-7L8 5z"/></svg>
                  </span>
                  Découvrir la carte
                </a>
              </div>
            </div>

            {/* hero card */}
            <div className="col-span-4 flex flex-col justify-end">
              <div className="bg-[#F4EFE6]/95 backdrop-blur text-[#1A1714] p-7 rounded-sm shadow-soft">
                <Eyebrow className="brass-text">Le plat du jour · Mardi</Eyebrow>
                <h3 className="font-display text-[32px] leading-tight mt-3">
                  Risotto Carnaroli, <span className="font-display-it">safran de Cibeins</span>
                </h3>
                <p className="text-[13px] text-[#2C2620]/75 mt-2 leading-relaxed">
                  Bouillon de volaille fermière, parmesan 24 mois, copeaux de bottarga.
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-[#A88746]/30 pt-4">
                  <span className="text-[11px] tracking-micro uppercase text-[#2C2620]/60">Servi midi &amp; soir</span>
                  <span className="font-display text-[24px] price-tab">14 500 <span className="text-[12px] tracking-mini uppercase">FCFA</span></span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-[11px] tracking-micro uppercase text-[#EDE5D6]/70">
                <span>02 — 06 services hebdomadaires</span>
                <span className="brass-text">Voir la carte complète →</span>
              </div>
            </div>
          </div>

          {/* bottom marquee */}
          <div className="absolute left-0 right-0 bottom-0 border-t border-[#C9A86B]/20 bg-[#1A1714]/40 backdrop-blur-sm">
            <div className="max-w-[1280px] mx-auto px-12 h-16 flex items-center justify-between text-[11px] tracking-micro uppercase text-[#EDE5D6]/75">
              <span><span className="brass-text">01</span> &nbsp; Truffes fraîches d'Alba — saison</span>
              <span><span className="brass-text">02</span> &nbsp; Carte des vins · 220 références</span>
              <span><span className="brass-text">03</span> &nbsp; Terrasse climatisée — 80 couverts</span>
              <span><span className="brass-text">04</span> &nbsp; Voiturier offert · 19h → 23h</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRESENTATION / LA MAISON */}
      <section className="bg-[#F4EFE6]">
        <div className="max-w-[1280px] mx-auto px-12 py-32">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-5">
              <div className="relative">
                <img src={IMG.interior1} className="w-full h-[560px] object-cover shadow-soft photo-warm" />
                <div className="absolute -bottom-10 -right-10 w-56 h-72 border border-[#A88746]/40 bg-[#F4EFE6] p-5 shadow-card">
                  <Eyebrow className="brass-text">Chef</Eyebrow>
                  <p className="font-display text-[26px] leading-tight mt-2">Giancarlo <span className="font-display-it">Moretti</span></p>
                  <p className="text-[12px] text-[#2C2620]/70 mt-2 leading-relaxed font-light">
                    Formé chez Ducasse &amp; chez les frères Cerea à Bergame. À la Taverne depuis 2014.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-6">
              <Eyebrow className="brass-text mb-6">01 — La Maison</Eyebrow>
              <h2 className="font-display text-[64px] leading-[1.02]">
                Une institution discrète, <br/>
                <span className="font-display-it">deux cuisines complices.</span>
              </h2>
              <div className="hairline my-10"></div>
              <p className="text-[15px] leading-[1.85] text-[#2C2620]/85 font-light max-w-[520px]">
                Ouverte en 1987 sur le boulevard lagunaire, la Taverne Romaine est restée fidèle à
                son geste : une cuisine de marché, exécutée à la minute, où le bistrot parisien et la
                trattoria romaine se répondent — sans concession sur le produit.
              </p>
              <p className="text-[15px] leading-[1.85] text-[#2C2620]/85 font-light max-w-[520px] mt-5">
                La salle, ses banquettes de cuir tabac et son plafond de bois huilé, accueille
                aussi bien le déjeuner d'affaires que le dîner intime, pour 72 couverts.
              </p>

              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  ["38","ans de service"],
                  ["72","couverts"],
                  ["220","références cave"],
                ].map(([n,l])=>(
                  <div key={l}>
                    <div className="font-display text-[56px] leading-none brass-text">{n}</div>
                    <div className="text-[11px] tracking-micro uppercase text-[#2C2620]/60 mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU — Italian & French */}
      <section className="bg-[#EDE5D6]">
        <div className="max-w-[1280px] mx-auto px-12 py-32">
          <div className="flex items-end justify-between mb-16">
            <div>
              <Eyebrow className="brass-text mb-6">02 — La Carte</Eyebrow>
              <h2 className="font-display text-[64px] leading-[1.02]">
                Deux héritages, <br/><span className="font-display-it">un même geste.</span>
              </h2>
            </div>
            <div className="text-right max-w-[320px]">
              <p className="text-[14px] text-[#2C2620]/75 font-light leading-relaxed">
                La carte évolue chaque saison. Voici une sélection signature, servie toute l'année.
              </p>
              <a className="mt-4 inline-flex items-center gap-2 text-[12px] tracking-mini uppercase brass-text">Carte complète · PDF →</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16">
            {/* ITALIENNES */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-[30px]">
                  <span className="brass-text font-display-it text-[20px] mr-3">i.</span>
                  Spécialités <span className="font-display-it">italiennes</span>
                </h3>
                <span className="text-[11px] tracking-micro uppercase text-[#2C2620]/50">12 plats</span>
              </div>
              <div className="space-y-7">
                {[
                  ["Carpaccio di Manzo","Bœuf de Kafolo, roquette, parmesan 30 mois, huile d'olive de Ligurie","9 800",IMG.carpaccio,"signature"],
                  ["Tagliatelle al Tartufo","Pâtes fraîches maison, beurre noisette, truffe noire râpée minute","16 500",IMG.pasta,"saison"],
                  ["Pizza Margherita D.O.P.","San Marzano, mozzarella di bufala, basilic, pâte 48h","8 200",IMG.pizza,""],
                  ["Osso Buco alla Milanese","Jarret de veau braisé, gremolata, risotto safrané","18 900",IMG.duck,""],
                  ["Tiramisù della Casa","Mascarpone, savoiardi, café d'Italie, cacao Valrhona","5 600",IMG.tiramisu,""],
                ].map((m,i)=>(
                  <div key={i} className="flex items-start gap-5 group">
                    <img src={m[3]} className="w-20 h-20 object-cover rounded-sm photo-warm shrink-0" />
                    <div className="flex-1 pt-1">
                      <div className="flex items-baseline">
                        <h4 className="font-display text-[22px] leading-tight">{m[0]}</h4>
                        {m[4] && <span className="ml-3 text-[9px] tracking-micro uppercase brass-text border border-[#A88746]/50 px-2 py-0.5 rounded-full">{m[4]}</span>}
                        <span className="menu-dots"></span>
                        <span className="font-display text-[22px] price-tab whitespace-nowrap">{m[2]}</span>
                      </div>
                      <p className="text-[12.5px] text-[#2C2620]/65 mt-1 leading-relaxed font-light">{m[1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FRANCAISES */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-[30px]">
                  <span className="brass-text font-display-it text-[20px] mr-3">ii.</span>
                  Spécialités <span className="font-display-it">françaises</span>
                </h3>
                <span className="text-[11px] tracking-micro uppercase text-[#2C2620]/50">10 plats</span>
              </div>
              <div className="space-y-7">
                {[
                  ["Foie Gras Mi-Cuit","Cuit au torchon, chutney de mangue Kent, brioche toastée","11 200",IMG.bread,""],
                  ["Magret de Canard du Sud-Ouest","Sauce au poivre de Penja, gratin dauphinois","17 400",IMG.duck,"signature"],
                  ["Saint-Pierre Meunière","Beurre noisette, câpres, citron confit, pommes vapeur","19 800",IMG.fish,""],
                  ["Côte de Bœuf Maturée","Pour deux personnes, 1kg, frites maison, sauce béarnaise","42 000",IMG.steak,"part."],
                  ["Tarte Tatin Tiède","Pommes caramélisées, crème d'Isigny, glace vanille de Tahiti","5 800",IMG.dessert,""],
                ].map((m,i)=>(
                  <div key={i} className="flex items-start gap-5 group">
                    <img src={m[3]} className="w-20 h-20 object-cover rounded-sm photo-warm shrink-0" />
                    <div className="flex-1 pt-1">
                      <div className="flex items-baseline">
                        <h4 className="font-display text-[22px] leading-tight">{m[0]}</h4>
                        {m[4] && <span className="ml-3 text-[9px] tracking-micro uppercase brass-text border border-[#A88746]/50 px-2 py-0.5 rounded-full">{m[4]}</span>}
                        <span className="menu-dots"></span>
                        <span className="font-display text-[22px] price-tab whitespace-nowrap">{m[2]}</span>
                      </div>
                      <p className="text-[12.5px] text-[#2C2620]/65 mt-1 leading-relaxed font-light">{m[1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hairline mt-20"></div>
          <div className="mt-8 flex items-center justify-between text-[12px] tracking-mini uppercase text-[#2C2620]/65">
            <span>Prix en FCFA · service compris · TVA inclus</span>
            <span className="brass-text">Voir les menus dégustation →</span>
          </div>
        </div>
      </section>

      {/* CAVE & EXPERIENCE strip */}
      <section className="bg-[#1A1714] text-[#EDE5D6]">
        <div className="max-w-[1280px] mx-auto px-12 py-28">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-5">
              <Eyebrow className="text-[#C9A86B] mb-6">03 — La Cave</Eyebrow>
              <h2 className="font-display text-[60px] leading-[1.02]">
                220 références, <br/>
                <span className="font-display-it brass-text">de la Bourgogne au Piémont.</span>
              </h2>
              <p className="text-[15px] leading-[1.85] text-[#EDE5D6]/75 font-light mt-8 max-w-[460px]">
                Une cave passionnée, construite plat par plat avec notre sommelier — du petit
                vigneron rhodanien aux grands barolos. Tous les vins sont disponibles au verre.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6">
                {[["Bordeaux","42"],["Bourgogne","38"],["Toscane","31"],["Piémont","24"],["Champagne","22"],["Autres","63"]].map(([r,n])=>(
                  <div key={r} className="border-t border-[#C9A86B]/25 pt-3">
                    <div className="font-display text-[28px] brass-text price-tab">{n}</div>
                    <div className="text-[11px] tracking-micro uppercase text-[#EDE5D6]/55 mt-1">{r}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-7">
              <div className="grid grid-cols-2 gap-5">
                <img src={IMG.wine} className="w-full h-[440px] object-cover photo-warm" />
                <div className="grid grid-rows-2 gap-5">
                  <img src={IMG.glass} className="w-full h-[210px] object-cover photo-warm" />
                  <img src={IMG.table} className="w-full h-[210px] object-cover photo-warm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#F4EFE6]">
        <div className="max-w-[1280px] mx-auto px-12 py-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <Eyebrow className="brass-text mb-6">04 — L'Atmosphère</Eyebrow>
              <h2 className="font-display text-[64px] leading-[1.02]">
                Une parenthèse, <br/><span className="font-display-it">à toute heure.</span>
              </h2>
            </div>
            <span className="text-[12px] tracking-mini uppercase brass-text">Galerie complète →</span>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <img src={IMG.interior1} className="col-span-5 h-[420px] w-full object-cover photo-warm" />
            <img src={IMG.chef}      className="col-span-3 h-[420px] w-full object-cover photo-warm" />
            <img src={IMG.pizza}     className="col-span-4 h-[420px] w-full object-cover photo-warm" />
            <img src={IMG.table}     className="col-span-4 h-[320px] w-full object-cover photo-warm" />
            <img src={IMG.steak}     className="col-span-5 h-[320px] w-full object-cover photo-warm" />
            <img src={IMG.dessert}   className="col-span-3 h-[320px] w-full object-cover photo-warm" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#EDE5D6]">
        <div className="max-w-[1280px] mx-auto px-12 py-32">
          <div className="text-center max-w-[640px] mx-auto">
            <Eyebrow className="brass-text justify-center inline-flex">05 — Ils en parlent</Eyebrow>
            <h2 className="font-display text-[58px] leading-[1.05] mt-6">
              <span className="font-display-it">«</span> Le meilleur de Paris <br/> et de Rome,
              <span className="font-display-it"> servi à Abidjan. </span><span className="font-display-it">»</span>
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-7 mt-16">
            {[
              {
                q:"Une salle hors du temps et une cuisine d'une justesse rare. Le risotto au safran reste notre référence en ville.",
                a:"Le Petit Futé — Côte d'Ivoire",
                tag:"Guide 2024",
              },
              {
                q:"On y va pour le canard, on y revient pour la cave. Service impeccable, jamais empesé.",
                a:"Marie-Hélène K.",
                tag:"Cliente depuis 2009",
              },
              {
                q:"L'une des dernières vraies tables franco-italiennes du Plateau. Une institution, mais sans poussière.",
                a:"Jeune Afrique — Cuisine",
                tag:"Sélection 2023",
              },
            ].map((t,i)=>(
              <figure key={i} className="bg-[#F4EFE6] p-8 shadow-card relative">
                <div className="absolute -top-5 left-7 font-display-it text-[80px] leading-none brass-text">"</div>
                <StarRow />
                <blockquote className="font-display text-[22px] leading-[1.35] mt-4 text-[#1A1714]">{t.q}</blockquote>
                <Hairline className="my-6" />
                <figcaption>
                  <div className="font-medium text-[13px]">{t.a}</div>
                  <div className="text-[11px] tracking-mini uppercase text-[#2C2620]/55 mt-1">{t.tag}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* press logos */}
          <div className="mt-20 flex items-center justify-between text-[12px] tracking-micro uppercase text-[#2C2620]/45">
            <span className="font-display-it text-[20px] text-[#2C2620]/55 normal-case tracking-normal">Recommandé par</span>
            <span>Guide Michelin</span>
            <span>·</span>
            <span>TripAdvisor · Hall of Fame</span>
            <span>·</span>
            <span>Jeune Afrique</span>
            <span>·</span>
            <span>Petit Futé</span>
            <span>·</span>
            <span>Pullman Abidjan</span>
          </div>
        </div>
      </section>

      {/* RESERVATION + INFOS */}
      <section className="bg-[#1A1714] text-[#EDE5D6]">
        <div className="max-w-[1280px] mx-auto px-12 py-32 grid grid-cols-12 gap-12">
          <div className="col-span-6">
            <Eyebrow className="text-[#C9A86B] mb-6">06 — Réserver</Eyebrow>
            <h2 className="font-display text-[64px] leading-[1.02]">
              Une table <br/><span className="font-display-it brass-text">vous attend.</span>
            </h2>
            <p className="text-[15px] leading-[1.85] text-[#EDE5D6]/75 font-light mt-8 max-w-[440px]">
              Réservation conseillée du jeudi au samedi. Pour les groupes de plus de 8 personnes,
              merci de nous contacter directement.
            </p>

            <div className="mt-10 bg-[#2C2620] p-7 border border-[#C9A86B]/15 shadow-soft">
              <div className="grid grid-cols-2 gap-5">
                {[
                  ["Date","Ven. 22 mai 2026"],
                  ["Heure","20 : 00"],
                  ["Couverts","4 personnes"],
                  ["Salle","Terrasse"],
                ].map(([l,v])=>(
                  <div key={l} className="border-b border-[#C9A86B]/15 pb-3">
                    <div className="text-[10px] tracking-micro uppercase text-[#EDE5D6]/50">{l}</div>
                    <div className="font-display text-[24px] mt-1">{v}</div>
                  </div>
                ))}
              </div>
              <button className="mt-7 w-full bg-[#B4502B] text-[#F4EFE6] h-14 rounded-full text-[13px] tracking-mini uppercase font-medium flex items-center justify-center gap-2">
                Confirmer la réservation <span>→</span>
              </button>
              <div className="mt-4 text-[11px] tracking-mini uppercase text-[#EDE5D6]/45 text-center">
                Confirmation immédiate · annulation gratuite jusqu'à 4h avant
              </div>
            </div>
          </div>

          <div className="col-span-1 flex justify-center"><div className="hairline-v h-full"></div></div>

          <div className="col-span-5">
            <Eyebrow className="text-[#C9A86B] mb-6">07 — Nous Trouver</Eyebrow>
            <h2 className="font-display text-[40px] leading-[1.1]">
              Boulevard <span className="font-display-it">Lagunaire</span>, <br/>à deux pas du Pullman.
            </h2>

            <div className="mt-8 relative">
              <div className="w-full h-[260px] relative overflow-hidden border border-[#C9A86B]/15">
                {/* abstract map */}
                <div className="absolute inset-0" style={{background:"linear-gradient(135deg,#2C2620 0%,#3a322a 100%)"}}></div>
                <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 600 300">
                  <path d="M0 80 Q150 60 300 110 T 600 90" stroke="#A88746" strokeWidth="1" fill="none" opacity=".4"/>
                  <path d="M0 180 Q200 220 400 170 T 600 200" stroke="#A88746" strokeWidth="1" fill="none" opacity=".4"/>
                  <path d="M120 0 L140 300" stroke="#A88746" strokeWidth=".5" opacity=".25"/>
                  <path d="M340 0 L360 300" stroke="#A88746" strokeWidth=".5" opacity=".25"/>
                  <path d="M0 130 Q300 100 600 150" stroke="#C9A86B" strokeWidth="1.5" fill="none"/>
                  <circle cx="320" cy="138" r="6" fill="#B4502B"/>
                  <circle cx="320" cy="138" r="12" fill="none" stroke="#B4502B" opacity=".4"/>
                  <circle cx="320" cy="138" r="20" fill="none" stroke="#B4502B" opacity=".2"/>
                </svg>
                <div className="absolute bottom-4 left-4 bg-[#1A1714]/90 px-4 py-2 border border-[#C9A86B]/20">
                  <div className="text-[10px] tracking-micro uppercase text-[#C9A86B]">Abidjan · Plateau</div>
                  <div className="font-display text-[18px] mt-0.5">5°19'N · 4°01'W</div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 text-[13px] font-light">
              <div>
                <div className="text-[10px] tracking-micro uppercase text-[#C9A86B] mb-2">Adresse</div>
                <div>Boulevard Lagunaire<br/>À côté de l'Hôtel Pullman<br/>Abidjan Plateau, Côte d'Ivoire</div>
              </div>
              <div>
                <div className="text-[10px] tracking-micro uppercase text-[#C9A86B] mb-2">Horaires</div>
                <div>
                  Mardi → Vendredi · 12h–14h30 / 19h–23h<br/>
                  Samedi · 19h–23h30<br/>
                  Dimanche · 12h–15h / 19h–22h30<br/>
                  <span className="text-[#EDE5D6]/55">Fermé lundi et samedi midi</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] tracking-micro uppercase text-[#C9A86B] mb-2">Téléphone</div>
                <div>+225 27 20 21 89 51<br/>+225 07 07 93 80 66</div>
              </div>
              <div>
                <div className="text-[10px] tracking-micro uppercase text-[#C9A86B] mb-2">Email</div>
                <div>contact@taverne-romaine.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F0D0B] text-[#EDE5D6]/70">
        <div className="max-w-[1280px] mx-auto px-12 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-4">
              <div className="text-[11px] tracking-micro uppercase brass-text">Depuis 1987</div>
              <div className="font-display text-[36px] leading-none text-[#F4EFE6] mt-1">La Taverne <span className="font-display-it">Romaine</span></div>
              <p className="text-[13px] leading-[1.85] font-light mt-5 max-w-[300px]">
                Cuisine franco-italienne d'auteur, sur le boulevard lagunaire d'Abidjan, depuis bientôt quarante ans.
              </p>
              <div className="mt-7 flex items-center gap-3">
                {["Facebook","Instagram","TripAdvisor"].map(s=>(
                  <span key={s} className="text-[10px] tracking-micro uppercase border border-[#C9A86B]/25 px-3 py-1.5">{s}</span>
                ))}
              </div>
            </div>
            <div className="col-span-2">
              <div className="text-[10px] tracking-micro uppercase brass-text mb-4">Maison</div>
              <ul className="space-y-2.5 text-[13px]">
                <li>La maison</li><li>La carte</li><li>La cave</li><li>Le chef</li><li>Galerie</li>
              </ul>
            </div>
            <div className="col-span-2">
              <div className="text-[10px] tracking-micro uppercase brass-text mb-4">Services</div>
              <ul className="space-y-2.5 text-[13px]">
                <li>Réservation</li><li>Livraison</li><li>Privatisation</li><li>Cartes cadeaux</li><li>Traiteur</li>
              </ul>
            </div>
            <div className="col-span-4">
              <div className="text-[10px] tracking-micro uppercase brass-text mb-4">Lettre du Chef</div>
              <p className="text-[13px] font-light leading-relaxed">Une fois par mois, la carte de saison, un plat raconté, un vin choisi.</p>
              <div className="mt-4 flex items-center gap-0 border-b border-[#C9A86B]/30 pb-2">
                <span className="text-[13px] flex-1 text-[#EDE5D6]/45">votre email</span>
                <span className="text-[11px] tracking-mini uppercase brass-text">S'abonner →</span>
              </div>
            </div>
          </div>

          <div className="hairline mt-16"></div>

          <div className="mt-6 flex items-center justify-between text-[11px] tracking-mini uppercase text-[#EDE5D6]/35">
            <div>© 1987 – 2026 La Taverne Romaine · Abidjan</div>
            <div className="flex gap-6">
              <span>Mentions légales</span>
              <span>Conditions</span>
              <span>Cookies</span>
            </div>
            <div>Design — Studio · 2026</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ============================================================
   MOBILE — 390px
============================================================ */
function Mobile(){
  return (
    <div style={{width:390}} className="bg-[#F4EFE6] text-[#1A1714] mx-auto overflow-hidden">
      {/* nav */}
      <div className="flex items-center justify-between px-5 h-16 bg-[#F4EFE6] border-b border-[#A88746]/15">
        <div className="w-9 h-9 border border-[#1A1714]/15 rounded-full flex items-center justify-center">
          <div className="space-y-1">
            <span className="block w-3.5 h-px bg-[#1A1714]"></span>
            <span className="block w-3.5 h-px bg-[#1A1714]"></span>
          </div>
        </div>
        <div className="text-center">
          <div className="text-[8px] tracking-micro uppercase brass-text leading-none">Depuis 1987</div>
          <div className="font-display text-[18px] leading-none mt-0.5">La Taverne <span className="font-display-it">Romaine</span></div>
        </div>
        <div className="w-9 h-9 border border-[#1A1714]/15 rounded-full flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1714" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
      </div>

      {/* HERO */}
      <section className="relative bg-[#1A1714] text-[#EDE5D6]">
        <img src={IMG.hero} className="absolute inset-0 w-full h-full object-cover opacity-55 photo-warm" />
        <div className="absolute inset-0" style={{background:"linear-gradient(180deg,rgba(26,23,20,.55) 0%,rgba(26,23,20,.4) 40%,rgba(26,23,20,.85) 100%)"}}></div>
        <div className="absolute inset-0 vignette"></div>
        <div className="relative px-6 pt-10 pb-12">
          <Eyebrow className="text-[#C9A86B]">Franco-Italien · Abidjan</Eyebrow>
          <h1 className="font-display text-[60px] leading-[0.93] mt-6 tracking-tight">
            La table <br/>
            où <span className="font-display-it brass-text">Rome</span> <br/>
            rencontre <span className="font-display-it">Paris</span>.
          </h1>
          <p className="text-[13.5px] font-light text-[#EDE5D6]/80 leading-[1.7] mt-6 max-w-[300px]">
            Une cuisine d'auteur entre tradition française et trattoria romaine, au cœur du Plateau, depuis 1987.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a className="inline-flex items-center justify-between bg-[#B4502B] text-[#F4EFE6] px-6 h-13 py-4 rounded-full text-[12px] tracking-mini uppercase font-medium shadow-soft">
              <span>Réserver une table</span><span>→</span>
            </a>
            <a className="inline-flex items-center justify-between border border-[#C9A86B]/40 text-[#EDE5D6] px-6 h-13 py-4 rounded-full text-[12px] tracking-mini uppercase">
              <span>Voir la carte</span><span className="brass-text">→</span>
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-[10px] tracking-mini uppercase text-[#EDE5D6]/65">
            <StarRow />
            <span>4,8 · 612 avis · Google</span>
          </div>
        </div>
      </section>

      {/* TODAY card */}
      <section className="px-5 -mt-10 relative z-10">
        <div className="bg-[#F4EFE6] shadow-soft p-5 border border-[#A88746]/15">
          <Eyebrow className="brass-text">Plat du jour · Mardi</Eyebrow>
          <h3 className="font-display text-[24px] leading-tight mt-2">
            Risotto Carnaroli, <span className="font-display-it">safran de Cibeins</span>
          </h3>
          <div className="flex items-center justify-between mt-3 border-t border-[#A88746]/30 pt-3">
            <span className="text-[10px] tracking-micro uppercase text-[#2C2620]/60">Midi &amp; soir</span>
            <span className="font-display text-[20px] price-tab">14 500 <span className="text-[10px] tracking-mini uppercase">FCFA</span></span>
          </div>
        </div>
      </section>

      {/* LA MAISON */}
      <section className="bg-[#F4EFE6] px-5 pt-16 pb-20">
        <Eyebrow className="brass-text mb-5">01 — La Maison</Eyebrow>
        <h2 className="font-display text-[40px] leading-[1.02]">
          Une institution discrète,
          <span className="font-display-it"> deux cuisines complices.</span>
        </h2>
        <Hairline className="my-7" />
        <p className="text-[14px] leading-[1.8] text-[#2C2620]/80 font-light">
          Ouverte en 1987 sur le boulevard lagunaire, la Taverne Romaine est restée fidèle à son geste :
          une cuisine de marché, exécutée à la minute, où le bistrot parisien et la trattoria romaine se répondent.
        </p>

        <img src={IMG.interior1} className="w-full h-[320px] object-cover mt-8 photo-warm" />

        <div className="mt-8 grid grid-cols-3 gap-3">
          {[["38","ans"],["72","couverts"],["220","vins"]].map(([n,l])=>(
            <div key={l}>
              <div className="font-display text-[36px] leading-none brass-text">{n}</div>
              <div className="text-[10px] tracking-micro uppercase text-[#2C2620]/55 mt-1.5">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CARTE — tabs (visual only) */}
      <section className="bg-[#EDE5D6] px-5 pt-16 pb-20">
        <Eyebrow className="brass-text mb-5">02 — La Carte</Eyebrow>
        <h2 className="font-display text-[40px] leading-[1.02]">
          Deux héritages, <span className="font-display-it">un même geste.</span>
        </h2>

        <div className="mt-8 grid grid-cols-2 bg-[#F4EFE6] p-1 rounded-full border border-[#A88746]/20">
          <div className="bg-[#1A1714] text-[#F4EFE6] rounded-full text-center py-2.5 text-[11px] tracking-mini uppercase">Italiennes</div>
          <div className="text-center py-2.5 text-[11px] tracking-mini uppercase text-[#2C2620]/65">Françaises</div>
        </div>

        <div className="mt-8 space-y-6">
          {[
            ["Carpaccio di Manzo","Roquette, parmesan 30 mois","9 800",IMG.carpaccio,"signature"],
            ["Tagliatelle al Tartufo","Truffe noire râpée minute","16 500",IMG.pasta,"saison"],
            ["Pizza Margherita D.O.P.","San Marzano, bufala, basilic","8 200",IMG.pizza,""],
            ["Osso Buco","Veau braisé, risotto safrané","18 900",IMG.duck,""],
            ["Tiramisù della Casa","Mascarpone, café d'Italie","5 600",IMG.tiramisu,""],
          ].map((m,i)=>(
            <div key={i} className="flex gap-4">
              <img src={m[3]} className="w-20 h-20 object-cover photo-warm shrink-0" />
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-display text-[18px] leading-tight">{m[0]}</h4>
                  {m[4] && <span className="text-[8px] tracking-micro uppercase brass-text border border-[#A88746]/50 px-1.5 py-0.5 rounded-full">{m[4]}</span>}
                </div>
                <p className="text-[11.5px] text-[#2C2620]/65 mt-1 leading-relaxed font-light">{m[1]}</p>
                <div className="font-display text-[18px] price-tab mt-1">{m[2]} <span className="text-[9px] tracking-mini uppercase">FCFA</span></div>
              </div>
            </div>
          ))}
        </div>

        <a className="mt-10 inline-flex w-full items-center justify-between border-t border-b border-[#1A1714] py-4 text-[11px] tracking-mini uppercase font-medium">
          <span>Carte complète · 32 plats</span><span className="brass-text">→</span>
        </a>
      </section>

      {/* CAVE */}
      <section className="bg-[#1A1714] text-[#EDE5D6] px-5 pt-16 pb-20 relative overflow-hidden">
        <img src={IMG.wine} className="absolute right-0 top-0 w-2/3 h-full object-cover opacity-30 photo-warm" />
        <div className="absolute inset-0" style={{background:"linear-gradient(90deg,rgba(26,23,20,.95) 0%,rgba(26,23,20,.7) 70%,rgba(26,23,20,.4) 100%)"}}></div>
        <div className="relative">
          <Eyebrow className="text-[#C9A86B] mb-5">03 — La Cave</Eyebrow>
          <h2 className="font-display text-[40px] leading-[1.02]">
            220 références,
            <span className="font-display-it brass-text"> de la Bourgogne au Piémont.</span>
          </h2>
          <p className="text-[13.5px] leading-[1.8] text-[#EDE5D6]/75 font-light mt-6 max-w-[280px]">
            Tous nos vins sont disponibles au verre. Conseillés à table par notre sommelier.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[["Bordeaux","42"],["Bourgogne","38"],["Toscane","31"],["Piémont","24"],["Champagne","22"],["Autres","63"]].map(([r,n])=>(
              <div key={r} className="border-t border-[#C9A86B]/25 pt-2.5">
                <div className="font-display text-[22px] brass-text price-tab">{n}</div>
                <div className="text-[9px] tracking-micro uppercase text-[#EDE5D6]/55 mt-1">{r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERIE */}
      <section className="bg-[#F4EFE6] px-5 pt-16 pb-20">
        <Eyebrow className="brass-text mb-5">04 — L'Atmosphère</Eyebrow>
        <h2 className="font-display text-[40px] leading-[1.02]">
          Une parenthèse, <span className="font-display-it">à toute heure.</span>
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3">
          <img src={IMG.interior1} className="w-full h-[180px] object-cover photo-warm col-span-2" />
          <img src={IMG.chef}      className="w-full h-[160px] object-cover photo-warm" />
          <img src={IMG.pizza}     className="w-full h-[160px] object-cover photo-warm" />
          <img src={IMG.table}     className="w-full h-[140px] object-cover photo-warm" />
          <img src={IMG.dessert}   className="w-full h-[140px] object-cover photo-warm" />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[#EDE5D6] px-5 pt-16 pb-20">
        <Eyebrow className="brass-text mb-5">05 — Ils en parlent</Eyebrow>
        <figure className="bg-[#F4EFE6] p-6 shadow-card relative">
          <div className="absolute -top-4 left-5 font-display-it text-[60px] leading-none brass-text">"</div>
          <StarRow />
          <blockquote className="font-display text-[22px] leading-[1.35] mt-3 text-[#1A1714]">
            Une salle hors du temps et une cuisine d'une justesse rare. Le risotto reste notre référence en ville.
          </blockquote>
          <Hairline className="my-5" />
          <figcaption>
            <div className="font-medium text-[12px]">Le Petit Futé</div>
            <div className="text-[10px] tracking-mini uppercase text-[#2C2620]/55 mt-1">Guide 2024</div>
          </figcaption>
        </figure>
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="w-6 h-1 rounded-full bg-[#1A1714]"></span>
          <span className="w-1.5 h-1 rounded-full bg-[#1A1714]/25"></span>
          <span className="w-1.5 h-1 rounded-full bg-[#1A1714]/25"></span>
        </div>
      </section>

      {/* RESERVE */}
      <section className="bg-[#1A1714] text-[#EDE5D6] px-5 pt-16 pb-20">
        <Eyebrow className="text-[#C9A86B] mb-5">06 — Réserver</Eyebrow>
        <h2 className="font-display text-[40px] leading-[1.02]">
          Une table <br/><span className="font-display-it brass-text">vous attend.</span>
        </h2>

        <div className="mt-8 bg-[#2C2620] p-5 border border-[#C9A86B]/15">
          <div className="grid grid-cols-2 gap-4">
            {[["Date","Ven. 22 mai"],["Heure","20 : 00"],["Couverts","4 pers."],["Salle","Terrasse"]].map(([l,v])=>(
              <div key={l} className="border-b border-[#C9A86B]/15 pb-2">
                <div className="text-[9px] tracking-micro uppercase text-[#EDE5D6]/50">{l}</div>
                <div className="font-display text-[18px] mt-0.5">{v}</div>
              </div>
            ))}
          </div>
          <button className="mt-5 w-full bg-[#B4502B] text-[#F4EFE6] h-12 rounded-full text-[11px] tracking-mini uppercase font-medium flex items-center justify-center gap-2">
            Confirmer <span>→</span>
          </button>
        </div>
      </section>

      {/* MAP & INFOS */}
      <section className="bg-[#F4EFE6] px-5 pt-16 pb-20">
        <Eyebrow className="brass-text mb-5">07 — Nous Trouver</Eyebrow>
        <h2 className="font-display text-[32px] leading-[1.1]">
          Boulevard <span className="font-display-it">Lagunaire</span>, à deux pas du Pullman.
        </h2>

        <div className="mt-6 relative h-[200px] border border-[#A88746]/20 overflow-hidden">
          <div className="absolute inset-0" style={{background:"linear-gradient(135deg,#EDE5D6 0%,#dccfb6 100%)"}}></div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
            <path d="M0 60 Q100 50 200 80 T 400 60" stroke="#A88746" strokeWidth="1" fill="none" opacity=".5"/>
            <path d="M0 140 Q150 170 250 130 T 400 150" stroke="#A88746" strokeWidth="1" fill="none" opacity=".5"/>
            <path d="M0 100 Q200 80 400 120" stroke="#B4502B" strokeWidth="1.5" fill="none"/>
            <circle cx="210" cy="98" r="6" fill="#B4502B"/>
            <circle cx="210" cy="98" r="14" fill="none" stroke="#B4502B" opacity=".3"/>
          </svg>
          <div className="absolute bottom-3 left-3 bg-[#1A1714] text-[#F4EFE6] px-3 py-1.5">
            <div className="text-[9px] tracking-micro uppercase brass-text">Plateau</div>
            <div className="font-display text-[14px]">5°19'N · 4°01'W</div>
          </div>
        </div>

        <div className="mt-6 space-y-5 text-[13px] font-light">
          <div>
            <div className="text-[9px] tracking-micro uppercase brass-text mb-1.5">Adresse</div>
            <div>Boulevard Lagunaire · À côté de l'Hôtel Pullman · Abidjan Plateau</div>
          </div>
          <div>
            <div className="text-[9px] tracking-micro uppercase brass-text mb-1.5">Horaires</div>
            <div>
              Mar → Ven · 12h–14h30 / 19h–23h<br/>
              Sam · 19h–23h30 · Dim · 12h–15h / 19h–22h30<br/>
              <span className="text-[#2C2620]/55">Fermé lundi &amp; samedi midi</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-[9px] tracking-micro uppercase brass-text mb-1.5">Téléphone</div>
              <div>+225 27 20 21 89 51</div>
            </div>
            <div>
              <div className="text-[9px] tracking-micro uppercase brass-text mb-1.5">Email</div>
              <div>contact@taverne-romaine.com</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F0D0B] text-[#EDE5D6]/70 px-5 pt-14 pb-10">
        <div className="text-[9px] tracking-micro uppercase brass-text">Depuis 1987</div>
        <div className="font-display text-[28px] leading-none text-[#F4EFE6] mt-1">La Taverne <span className="font-display-it">Romaine</span></div>
        <p className="text-[12px] font-light leading-relaxed mt-4">
          Cuisine franco-italienne d'auteur, sur le boulevard lagunaire d'Abidjan, depuis bientôt quarante ans.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 text-[12px]">
          <ul className="space-y-2"><li>La carte</li><li>La cave</li><li>Galerie</li><li>Le chef</li></ul>
          <ul className="space-y-2"><li>Réservation</li><li>Livraison</li><li>Privatisation</li><li>Contact</li></ul>
        </div>
        <Hairline className="my-8" />
        <div className="text-[10px] tracking-mini uppercase text-[#EDE5D6]/40 space-y-2">
          <div>© 1987 – 2026 La Taverne Romaine</div>
          <div>Design — Studio · 2026</div>
        </div>
      </footer>

    </div>
  );
}

/* ============================================================
   APP — Desktop / Mobile toggle
============================================================ */
/* Scales a fixed-width mockup down to fit the available viewport width. */
function ScaledFrame({ width, children, rounded=false }){
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [innerH, setInnerH] = useState(0);

  useLayoutEffect(() => {
    function update(){
      if (!wrapRef.current || !innerRef.current) return;
      const available = wrapRef.current.clientWidth;
      const s = Math.min(1, available / width);
      setScale(s);
      setInnerH(innerRef.current.offsetHeight);
    }
    update();
    const ro = new ResizeObserver(update);
    if (innerRef.current) ro.observe(innerRef.current);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener("resize", update);
    return () => { ro.disconnect(); window.removeEventListener("resize", update); };
  }, [width]);

  return (
    <div ref={wrapRef} className="w-full flex justify-center">
      <div
        style={{ width: width * scale, height: innerH * scale }}
        className={"relative " + (rounded ? "rounded-[28px] overflow-hidden ring-1 ring-[#A88746]/15 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]" : "shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]")}
      >
        <div
          ref={innerRef}
          style={{ width, transform: `scale(${scale})`, transformOrigin: "top left" }}
          className="absolute top-0 left-0"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function App(){
  const [mode,setMode] = useState("desktop");
  return (
    <div className="min-h-screen bg-[#221d18] relative">
      {/* FLOATING TOGGLE */}
      <div className="fixed bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center bg-[#1A1714] p-1.5 rounded-full border border-[#A88746]/30 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)]">
          {[
            ["desktop","Desktop",
              <svg key="d" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="13" rx="1.5"/><path d="M8 21h8M12 17v4"/></svg>
            ],
            ["mobile","Mobile",
              <svg key="m" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>
            ],
          ].map(([k,label,icon])=>(
            <button
              key={k}
              onClick={()=>setMode(k)}
              className={"flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 h-10 sm:h-11 rounded-full text-[11px] sm:text-[12px] tracking-mini uppercase font-medium transition " +
                (mode===k ? "bg-[#C9A86B] text-[#1A1714]" : "text-[#EDE5D6]/70 hover:text-[#EDE5D6]")}
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* STAGE */}
      <div className="stage py-8 sm:py-10 px-3 sm:px-6 pb-32" style={{minHeight:"100vh"}}>
        {mode==="desktop" ? (
          <ScaledFrame width={1440}>
            <Desktop/>
          </ScaledFrame>
        ) : (
          <ScaledFrame width={390} rounded>
            <Mobile/>
          </ScaledFrame>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
