import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The people and purpose behind Cai Mep Coffee. Connecting Vietnam’s coffee growers with buyers worldwide, with care for the origin and quality of every lot.",
};

export default function About() {
  return (
    <article className="about-editorial">
      <section className="about-story-row" aria-labelledby="about-title">
        <div className="about-story-copy">
          <p className="eyebrow">ABOUT CAI MEP COFFEE</p>
          <h1 id="about-title">It begins with<br />the people.</h1>
          <p>
            In Vietnam, coffee is part of everyday life. On the red basalt soils
            of the Central Highlands, families have grown it for generations,
            passing down their knowledge with the land they tend.
          </p>
          <p>
            We started Cai Mep Coffee to connect these growers with people
            around the world who care about what they buy. We want to be a
            supplier you know and trust, and to help you know the people and
            places behind your coffee, too.
          </p>
          <p>
            It comes down to a belief we share with our customers: good coffee
            begins with good relationships.
          </p>
        </div>
        <figure className="about-story-figure">
          <div className="about-story-photo about-harvest-photo">
            <Image
              src="/images/company/vietnam-coffee-harvest.jpg"
              alt="A farmer picking coffee cherries among green coffee trees in Lam Dong, Vietnam"
              fill
              preload
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          </div>
          <figcaption>Coffee harvest · Lam Dong, Vietnam</figcaption>
        </figure>
      </section>

      <section className="about-story-row about-story-row-reverse" aria-labelledby="at-origin-title">
        <div className="about-story-copy">
          <p className="eyebrow">TIME AT ORIGIN</p>
          <h2 id="at-origin-title">Knowing the hands<br />that grow it.</h2>
          <p>
            We have travelled across the Central Highlands to see the farms
            for ourselves and meet the people who work them. Walking through
            their coffee gardens, listening to them and holding the beans
            they have grown has given us a deeper respect for the work behind
            each harvest.
          </p>
          <p>
            That time together matters to how we source. We choose carefully,
            looking for good coffee and people we can rely on, season after
            season. It is how we build the confidence to put our name to
            Vietnamese coffee and send it out into the world.
          </p>
          <Link href="/coffee-origins" className="about-story-link">Explore our coffee origins</Link>
        </div>
        <figure className="about-story-figure">
          <div className="about-story-photo about-farmer-photo">
            <Image
              src="/images/company/vietnam-coffee-farmer.jpg"
              alt="A Vietnamese coffee farmer holding a branch of white coffee blossoms in a plantation"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          </div>
          <figcaption>Coffee in bloom · Vietnam</figcaption>
        </figure>
      </section>

      <section className="about-story-row" aria-labelledby="every-lot-title">
        <div className="about-story-copy">
          <p className="eyebrow">CARE IN EVERY LOT</p>
          <h2 id="every-lot-title">A few tonnes.<br />Our full attention.</h2>
          <p>
            We are happy to begin with a small lot, a few tonnes at a time.
            Getting the coffee right and earning your trust matter more to us
            than the size of an order.
          </p>
          <p>
            Every lot can be traced to its growing region. We make sure it is
            carefully processed and give the same attention to preparing it
            for shipment. We send it with the care we would expect if we were
            the ones receiving it.
          </p>
          <p>
            If that is how you like to work, we would be glad to hear what
            you are looking for.
          </p>
          <Link href="/contact" className="about-story-link">Talk to us about your coffee</Link>
        </div>
        <figure className="about-story-figure">
          <div className="about-story-photo about-pruning-photo">
            <Image
              src="/images/company/coffee-pruning-vietnam.jpg"
              alt="A grower pruning a Robusta coffee branch by hand after harvest in Vietnam"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          </div>
          <figcaption>Tending the trees after harvest · Vietnam</figcaption>
        </figure>
      </section>

      <aside className="about-photo-credits" aria-label="Photography credits">
        Photography: {" "}
        <a href="https://www.pexels.com/photo/30658792/" target="_blank" rel="noreferrer">1500m Coffee</a>
        {" & "}<a href="https://www.pexels.com/photo/coffee-farmer-27561437/" target="_blank" rel="noreferrer">Luyên TC</a>
        {" / Pexels. "}
        <a href="https://commons.wikimedia.org/wiki/File:To_cut_branch_of_coffee_tree.jpg" target="_blank" rel="noreferrer">DXLINH / Wikimedia Commons</a>
        {" ("}<a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noreferrer">CC BY-SA 3.0</a>
        {", cropped for display)."}
      </aside>
    </article>
  );
}
