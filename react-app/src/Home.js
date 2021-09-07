import NavBar from "./Navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <h1> Welcome! </h1>
        This view is only visible for authenticated users!
      </div>
    </div>
  );
}
