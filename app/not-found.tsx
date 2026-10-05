import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container section empty-state">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>
        Let’s get you back
        <br />
        to the coffee.
      </h1>
      <p>This page is not in our catalogue.</p>
      <Link className="button" href="/products">
        Explore Products
      </Link>
    </section>
  );
}
