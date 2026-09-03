import type { Metadata } from "next";
import MotionEffects from "./MotionEffects";

export const metadata: Metadata = {
  title: "Prótese capilar | Barbearia LK",
  description: "Avaliação personalizada para prótese capilar, definida para a sua área de cobertura e o resultado que você procura.",
};

const message = encodeURIComponent("Olá! Vim pelo site da Barbearia LK e gostaria de agendar uma avaliação para prótese capilar.");
const whatsapp = `https://wa.me/?text=${message}`; // Substituir pelo número real: https://wa.me/55DDDNUMERO?text=...
const instagram = "https://www.instagram.com/"; // Substituir pelo perfil oficial da Barbearia LK.
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
  "Quanto tempo dura?", "O resultado fica natural?", "Posso viver normalmente com a prótese?", "Posso tomar banho?", "Posso praticar esportes?", "Posso dormir com a prótese?", "Posso retirar e colocar novamente?", "De quanto em quanto tempo preciso fazer manutenção?",
];

function CTA({ children = "Agendar avaliação", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <a className={`button ${className}`} href={whatsapp} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}

function Placeholder({ label, guide, className = "" }: { label: string; guide: string; className?: string }) {
  return <div className={`placeholder ${className}`} role="img" aria-label={`Espaço reservado: ${label}. ${guide}`}><span>{label}</span><small>{guide}</small></div>;
}

function TransitionBridge({ from, to, text }: { from: string; to: string; text: string }) {
  return <div className="transition-bridge" aria-label={`${from}. ${text}. ${to}.`}><span>{from}</span><div aria-hidden="true"><i/><b/></div><p>{text}</p><span>{to}</span></div>;
}

export default function Home() {
  return <main>
    <MotionEffects/>
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Barbearia LK — início"><img className="real-logo" src="/logo-barbearia-lk.jpeg" alt="Logo da Barbearia LK"/></a>
      <nav className="desktop-nav" aria-label="Navegação principal"><a className="active" href="#inicio">Início</a><a href="#personalizacao">Prótese capilar</a><a href="#resultados">Resultados</a><a href="#processo">Como funciona</a><a href="#duvidas">FAQ</a><a href="#localizacao">Localização</a><a href="#contato">Contato</a></nav>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-media"><img src="/hero-protese-capilar.jpeg" alt="Cliente com prótese capilar finalizada ao lado do especialista da Barbearia LK" fetchPriority="high"/></div><div className="hero-overlay"/><div className="wood-lines" aria-hidden="true"/>
      <div className="hero-content"><p className="eyebrow"><span/> Especialistas em prótese capilar</p><h1>Seu visual muda.<br/><em>Sua confiança acompanha.</em></h1><p className="hero-copy">Cada prótese começa pelo seu caso: área de cobertura, cabelo atual e o resultado que você quer ver no espelho.</p><CTA>Agendar minha avaliação</CTA><p className="microcopy">Avaliação personalizada <b>•</b> Atendimento com hora marcada</p></div>
      <div className="hero-index" aria-hidden="true"><span>01</span><span>Barbearia LK</span></div>
    </section>

    <div className="marquee" aria-label="Prótese capilar, naturalidade, estilo, autoestima e personalização"><div className="marquee-track"><span>Prótese capilar</span><i>•</i><span>Naturalidade</span><i>•</i><span>Estilo</span><i>•</i><span>Autoestima</span><i>•</i><span>Personalização</span><i>•</i><span aria-hidden="true">Prótese capilar</span><i aria-hidden="true">•</i><span aria-hidden="true">Naturalidade</span><i aria-hidden="true">•</i><span aria-hidden="true">Estilo</span><i aria-hidden="true">•</i></div></div>

    <section className="personal section-light" id="personalizacao"><div className="section-number">02</div><div className="personal-intro"><p className="eyebrow dark"><span/> Feita para você</p><h2>Não existe uma única solução para todos os tipos de calvície.</h2><p>Uma entrada, uma área extensa ou uma mudança de densidade pedem leituras diferentes. A avaliação conecta o que você tem hoje ao resultado que deseja.</p></div><div className="criteria" aria-label="Critérios da avaliação">{criteria.map((item, i)=><div key={item}><span>0{i+1}</span><strong>{item}</strong></div>)}</div><div className="personal-end"><p>É por isso que tudo começa<br/><em>pela avaliação.</em></p></div></section>

    <TransitionBridge from="Entender" to="Transformar" text="Quando a escolha começa pelo seu caso, o resultado deixa de ser genérico."/>

    <section className="results" id="resultados"><div className="results-head"><div><p className="eyebrow"><span/> Resultados reais</p><h2>Veja o que uma solução feita para o seu caso pode mudar.</h2></div><p>Sem promessas genéricas. O resultado precisa conversar com o rosto, o cabelo e o estilo de cada pessoa.</p></div><div className="comparison"><div className="compare-label before">Antes</div><img className="result-photo result-before" src="/resultado-antes.jpeg" alt="Cliente antes da aplicação da prótese capilar" loading="lazy"/><img className="result-photo result-after" src="/resultado-depois.jpeg" alt="Cliente depois da aplicação da prótese capilar" loading="lazy"/><div className="divider"><span>↔</span></div><div className="compare-label after">Depois</div></div><p className="media-disclaimer">Resultado real realizado pela Barbearia LK. Cada caso possui características individuais.</p></section>

    <section className="natural section-light"><div className="natural-copy"><p className="eyebrow dark"><span/> Naturalidade</p><h2>O objetivo não é<br/>parecer uma prótese.</h2><p>A prótese precisa integrar cabelo, corte e acabamento em um único resultado visual.</p><ol>{["Linha frontal", "Densidade", "Integração", "Corte", "Acabamento"].map((x,i)=><li key={x}><span>0{i+1}</span>{x}</li>)}</ol></div><Placeholder label="Detalhe do resultado" guide="Foto aproximada da linha frontal, nítida e feita com luz natural" className="natural-photo"/></section>

    <TransitionBridge from="Detalhe" to="Consistência" text="Naturalidade não acontece por acaso. Ela é construída em cada etapa."/>

    <section className="process" id="processo"><div className="process-title"><p className="eyebrow"><span/> Como funciona</p><h2>Da avaliação ao acabamento.</h2><p>Um processo claro, conduzido a partir das necessidades do seu caso.</p></div><div className="timeline">{steps.map(([n,title,text])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

    <TransitionBridge from="Aplicação" to="Acompanhamento" text="O cuidado continua depois do primeiro resultado."/>

    <section className="faq section-light" id="duvidas"><div className="faq-intro"><p className="eyebrow dark"><span/> Dúvidas frequentes</p><h2>Antes de decidir,<br/>pergunte tudo.</h2><p>As respostas técnicas serão incluídas após validação da equipe da Barbearia LK.</p></div><div className="accordion">{faqs.map((q,i)=><details key={q}><summary><span>{String(i+1).padStart(2,"0")}</span>{q}<b aria-hidden="true">+</b></summary><p data-status="aguardando-validacao">Resposta aguardando validação técnica do cliente.</p></details>)}<details><summary><span>09</span>Quanto custa uma prótese capilar?<b aria-hidden="true">+</b></summary><p>O valor varia conforme as características e necessidades de cada caso, por isso é necessário realizar uma avaliação antes da definição do investimento.</p></details></div></section>

    <section className="barbershop"><div className="barber-copy"><p className="eyebrow"><span/> A Barbearia LK</p><h2>Um espaço preparado para cuidar de todo o seu visual.</h2><p>Conheça o ambiente onde cada avaliação, aplicação e acabamento acontece com atenção, estrutura e discrição.</p></div><div className="barber-grid" aria-label="Fotos do espaço da Barbearia LK"><figure className="space-photo space-main"><img src="/barbearia-interior.jpeg" alt="Visão completa do espaço interno da Barbearia LK" loading="lazy"/><figcaption>O espaço completo</figcaption></figure><figure className="space-photo"><img src="/area-aplicacao-1.jpeg" alt="Primeira área reservada para aplicação de prótese capilar" loading="lazy"/><figcaption>Área de aplicação</figcaption></figure><figure className="space-photo"><img src="/area-aplicacao-2.jpeg" alt="Segunda área de atendimento e aplicação de prótese capilar" loading="lazy"/><figcaption>Atendimento especializado</figcaption></figure></div></section>

    <section className="location section-light" id="localizacao"><div className="map-satellite"><iframe src={mapsUrl} title="Mapa por satélite da Barbearia LK na Rua Dom Duarte da Costa, 253, São Vicente" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div><div className="location-info"><p className="eyebrow dark"><span/> Localização</p><h2>Venha conversar com a gente.</h2><address>Rua Dom Duarte da Costa, 253<br/>São Vicente — SP</address><p>Consulte a rota no mapa e agende sua avaliação antes de vir.</p><CTA>Agendar pelo WhatsApp</CTA></div></section>

    <footer className="contact-footer" id="contato"><div className="footer-lead"><a className="brand footer-brand" href="#inicio"><img className="real-logo footer-logo" src="/logo-barbearia-lk.jpeg" alt="Logo da Barbearia LK"/></a><p>Prótese capilar com avaliação personalizada.</p></div><div className="footer-address"><span>Visite a Barbearia LK</span><address>Rua Dom Duarte da Costa, 253<br/>São Vicente — SP</address></div><div className="social-contact"><p>Fale com a gente</p><div><a className="social-square instagram" href={instagram} target="_blank" rel="noreferrer" aria-label="Abrir Instagram da Barbearia LK"><img src="https://cdn.simpleicons.org/instagram/ffffff" alt="" width="23" height="23"/></a><a className="social-square whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a Barbearia LK pelo WhatsApp"><img src="https://cdn.simpleicons.org/whatsapp/ffffff" alt="" width="23" height="23"/></a></div></div><small>© {new Date().getFullYear()} Barbearia LK. Todos os direitos reservados.</small></footer>
    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Agendar avaliação pelo WhatsApp"><img src="https://cdn.simpleicons.org/whatsapp/ffffff" alt="" width="30" height="30"/></a>
  </main>;
}
