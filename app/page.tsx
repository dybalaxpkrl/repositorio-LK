import type { Metadata } from "next";
import MotionEffects from "./MotionEffects";

export const metadata: Metadata = {
  title: "Prótese capilar | Barbearia LK",
  description: "Avaliação personalizada para prótese capilar, definida para a sua área de cobertura e o resultado que você procura.",
};

const message = encodeURIComponent("Olá! Vim pelo site da Barbearia LK e quero saber mais.");
const whatsapp = `https://wa.me/5513978013681?text=${message}`;
const instagram = "https://www.instagram.com/lk_protesecapilar/";
const mapsUrl = "https://www.google.com/maps?q=Rua+Dom+Duarte+da+Costa,+253,+Sao+Vicente,+SP&output=embed&t=k&z=18";
const criteria = ["Área de cobertura", "Cabelo atual", "Resultado desejado", "Integração natural", "Densidade", "Linha frontal"];
const steps = [
  ["01", "Avaliação", "Entender seu caso, a área de cobertura e o resultado desejado."],
  ["02", "Definição", "Escolher a solução adequada às características do seu caso."],
  ["03", "Aplicação", "Preparação cuidadosa e instalação da prótese capilar."],
  ["04", "Corte e acabamento", "Integração da prótese ao conjunto do seu visual."],
  ["05", "Manutenção", "Cuidados e acompanhamento para manter o resultado."],
];
const faqs = [
  ["Quanto tempo dura?", "A durabilidade varia conforme os cuidados de cada pessoa. A estimativa da Barbearia LK é de 10 a 12 meses, com a rotina de cuidados e as manutenções adequadas."],
  ["O resultado fica natural?", "Sim. A escolha da prótese, a linha frontal, o corte e o acabamento são pensados para integrar o resultado ao seu visual. A percepção pode variar, principalmente para quem já conhecia você antes da aplicação."],
  ["Posso viver normalmente com a prótese?", "Sim, você pode manter sua rotina normalmente, seguindo as orientações de cuidado e mantendo as manutenções em dia."],
  ["Posso tomar banho?", "Sim. Use água morna e lave com movimentos suaves, sem esfregar ou puxar a base e a linha frontal. Utilize os produtos indicados pela equipe e, após a aplicação ou manutenção, respeite o prazo recomendado para molhar a prótese, que depende do adesivo utilizado."],
  ["Posso praticar esportes?", "Sim. Atendemos clientes que trabalham como personal trainers, nadam e jogam futebol. Os cuidados e a frequência de manutenção devem acompanhar a sua rotina, especialmente com suor e contato frequente com a água. Após a aplicação, siga o prazo orientado para retomar essas atividades."],
  ["Posso dormir com a prótese?", "Sim, você pode dormir com a prótese. Para ajudar a conservar os fios e reduzir o atrito, a equipe recomenda utilizar uma touca adequada, sem apertar a peça."],
  ["Posso retirar e colocar novamente?", "Sim, a prótese pode ser retirada e reaplicada. A remoção, a limpeza e a nova fixação devem ser feitas com os produtos e a técnica adequados. Peça orientação à equipe antes de fazer esse processo por conta própria."],
  ["De quanto em quanto tempo preciso fazer manutenção?", "Em média, a cada 15 a 20 dias. O intervalo pode variar conforme sua rotina, transpiração e condições de fixação. A equipe orientará a frequência mais adequada ao seu caso."],
];

function CTA({ children = "Agendar avaliação", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <a className={`button ${className}`} href={whatsapp} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}

function TransitionBridge({ from, to, text }: { from: string; to: string; text: string }) {
  return <div className="transition-bridge" aria-label={`${from}. ${text}. ${to}.`}><span>{from}</span><div aria-hidden="true"><i/><b/></div><p>{text}</p><span>{to}</span></div>;
}

export default function Home() {
  return <main>
    <link rel="preconnect" href="https://www.google.com"/>
    <link rel="dns-prefetch" href="https://maps.gstatic.com"/>
    <MotionEffects/>
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Barbearia LK — início"><img className="real-logo" src="/logo-barbearia-lk.jpeg" alt="Logo da Barbearia LK"/></a>
      <nav className="desktop-nav" aria-label="Navegação principal"><a className="active" href="#inicio">Início</a><a href="#personalizacao">Prótese capilar</a><a href="#resultados">Resultados</a><a href="#processo">Como funciona</a><a href="#duvidas">FAQ</a><a href="#localizacao">Localização</a><a href="#contato">Contato</a></nav>
      <details className="mobile-menu"><summary aria-label="Menu de navegação"><span/><span/><span/></summary><nav aria-label="Navegação mobile"><a href="#inicio">Início</a><a href="#personalizacao">Prótese capilar</a><a href="#resultados">Resultados</a><a href="#processo">Como funciona</a><a href="#duvidas">FAQ</a><a href="#localizacao">Localização</a><a href="#contato">Contato</a></nav></details>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-media"><img src="/hero-protese-capilar.jpeg" alt="Cliente com prótese capilar finalizada ao lado do especialista da Barbearia LK" fetchPriority="high"/></div><div className="hero-overlay"/><div className="wood-lines" aria-hidden="true"/>
      <div className="hero-content"><p className="eyebrow"><span/> Especialistas em prótese capilar</p><h1>Seu visual muda.<br/><em>Sua confiança acompanha.</em></h1><p className="hero-copy">Cada prótese começa pelo seu caso: área de cobertura, cabelo atual e o resultado que você quer ver no espelho.</p><CTA>Agendar minha avaliação</CTA><p className="microcopy">Avaliação personalizada <b>•</b> Atendimento com hora marcada</p></div>
      <div className="hero-index" aria-hidden="true"><span>01</span><span>Barbearia LK</span></div>
    </section>

    <div className="marquee" aria-label="Prótese capilar, naturalidade, estilo, autoestima e personalização"><div className="marquee-track">{[0,1].map(copy=><div className="marquee-group" key={copy} aria-hidden={copy===1 ? true : undefined}>{["Prótese capilar","Naturalidade","Estilo","Autoestima","Personalização"].map(word=><span key={word}>{word}<i aria-hidden="true">•</i></span>)}</div>)}</div></div>

    <section className="personal section-light" id="personalizacao"><div className="section-number">02</div><div className="personal-intro"><p className="eyebrow dark"><span/> Feita para você</p><h2>Não existe uma única solução para todos os tipos de calvície.</h2><p>Uma entrada, uma área extensa ou uma mudança de densidade pedem leituras diferentes. A avaliação conecta o que você tem hoje ao resultado que deseja.</p></div><div className="criteria" aria-label="Critérios da avaliação">{criteria.map((item, i)=><div key={item}><span>0{i+1}</span><strong>{item}</strong></div>)}</div><div className="personal-end"><p>É por isso que tudo começa<br/><em>pela avaliação.</em></p></div></section>

    <TransitionBridge from="Entender" to="Transformar" text="Quando a escolha começa pelo seu caso, o resultado deixa de ser genérico."/>

    <section className="results" id="resultados"><div className="results-head"><div><p className="eyebrow"><span/> Resultados reais</p><h2>Veja o que uma solução feita para o seu caso pode mudar.</h2></div><p>Sem promessas genéricas. O resultado precisa conversar com o rosto, o cabelo e o estilo de cada pessoa.</p></div><div className="comparison"><div className="compare-label before">Antes</div><img className="result-photo result-before" src="/resultado-antes.jpeg" alt="Cliente antes da aplicação da prótese capilar" loading="lazy"/><img className="result-photo result-after" src="/resultado-depois.jpeg" alt="Cliente depois da aplicação da prótese capilar" loading="lazy"/><div className="divider"><span>↔</span></div><div className="compare-label after">Depois</div></div><p className="media-disclaimer">Resultado real realizado pela Barbearia LK. Cada caso possui características individuais.</p></section>

    <section className="natural section-light"><div className="natural-copy"><p className="eyebrow dark"><span/> Naturalidade</p><h2>O objetivo não é<br/>parecer uma prótese.</h2><p>A prótese precisa integrar cabelo, corte e acabamento em um único resultado visual.</p><ol>{["Linha frontal", "Densidade", "Integração", "Corte", "Acabamento"].map((x,i)=><li key={x}><span>0{i+1}</span>{x}</li>)}</ol></div><figure className="natural-photo real-detail"><img src="/detalhe-resultado.jpeg" alt="Detalhe da linha frontal e do acabamento da prótese capilar na Barbearia LK" width="1024" height="1280" loading="lazy" decoding="async"/></figure></section>

    <TransitionBridge from="Detalhe" to="Consistência" text="Naturalidade não acontece por acaso. Ela é construída em cada etapa."/>

    <section className="process" id="processo"><div className="process-title"><p className="eyebrow"><span/> Como funciona</p><h2>Da avaliação ao acabamento.</h2><p>Um processo claro, conduzido a partir das necessidades do seu caso.</p></div><div className="timeline">{steps.map(([n,title,text])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

    <TransitionBridge from="Aplicação" to="Acompanhamento" text="O cuidado continua depois do primeiro resultado."/>

    <section className="faq section-light" id="duvidas"><div className="faq-intro"><p className="eyebrow dark"><span/> Dúvidas frequentes</p><h2>Antes de decidir,<br/>pergunte tudo.</h2><p>Entenda os cuidados, a manutenção e o que esperar da sua prótese capilar.</p></div><div className="accordion">{faqs.map(([q,answer],i)=><details key={q}><summary><span>{String(i+1).padStart(2,"0")}</span>{q}<b aria-hidden="true">+</b></summary><p>{answer}</p></details>)}<details><summary><span>09</span>Quanto custa uma prótese capilar?<b aria-hidden="true">+</b></summary><p>O valor varia conforme as características e necessidades de cada caso, por isso é necessário realizar uma avaliação antes da definição do investimento.</p></details></div></section>

    <section className="barbershop"><div className="barber-copy"><p className="eyebrow"><span/> A Barbearia LK</p><h2>Um espaço preparado para cuidar de todo o seu visual.</h2><p>Conheça o ambiente onde cada avaliação, aplicação e acabamento acontece com atenção, estrutura e discrição.</p></div><div className="barber-grid" aria-label="Fotos do espaço da Barbearia LK"><figure className="space-photo space-main"><img src="/barbearia-interior.jpeg" alt="Visão completa do espaço interno da Barbearia LK" loading="lazy"/><figcaption>O espaço completo</figcaption></figure><figure className="space-photo"><img src="/area-aplicacao-1.jpeg" alt="Primeira área reservada para aplicação de prótese capilar" loading="lazy"/><figcaption>Área de aplicação</figcaption></figure><figure className="space-photo"><img src="/area-aplicacao-2.jpeg" alt="Segunda área de atendimento e aplicação de prótese capilar" loading="lazy"/><figcaption>Atendimento especializado</figcaption></figure></div></section>

    <section className="location section-light" id="localizacao"><div className="map-satellite"><iframe data-src={mapsUrl} title="Mapa por satélite da Barbearia LK na Rua Dom Duarte da Costa, 253, São Vicente" loading="eager" referrerPolicy="no-referrer-when-downgrade"/><noscript><a href={mapsUrl} target="_blank" rel="noreferrer">Abrir mapa por satélite</a></noscript></div><div className="location-info"><p className="eyebrow dark"><span/> Localização</p><h2>Venha conversar com a gente.</h2><address>Rua Dom Duarte da Costa, 253<br/>São Vicente — SP</address><p>Consulte a rota no mapa e agende sua avaliação antes de vir.</p><CTA>Agendar pelo WhatsApp</CTA></div></section>

    <footer className="contact-footer" id="contato"><div className="footer-lead"><a className="brand footer-brand" href="#inicio"><img className="real-logo footer-logo" src="/logo-barbearia-lk.jpeg" alt="Logo da Barbearia LK"/></a><p>Prótese capilar com avaliação personalizada.</p></div><div className="footer-address"><span>Visite a Barbearia LK</span><address>Rua Dom Duarte da Costa, 253<br/>São Vicente — SP</address></div><div className="social-contact"><p>Fale com a gente</p><div><a className="social-square instagram" href={instagram} target="_blank" rel="noreferrer" aria-label="Abrir Instagram da Barbearia LK"><img src="https://cdn.simpleicons.org/instagram/ffffff" alt="" width="23" height="23"/></a><a className="social-square whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a Barbearia LK pelo WhatsApp"><img src="https://cdn.simpleicons.org/whatsapp/ffffff" alt="" width="23" height="23"/></a></div></div><small>© {new Date().getFullYear()} Barbearia LK. Todos os direitos reservados.</small></footer>
    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Agendar avaliação pelo WhatsApp"><img src="https://cdn.simpleicons.org/whatsapp/ffffff" alt="" width="30" height="30"/></a>
  </main>;
}
