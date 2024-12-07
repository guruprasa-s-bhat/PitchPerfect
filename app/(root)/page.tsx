import SearchForm from "@/components/SearchForm";
import Startupcard from "@/components/Startupcard";
import React from "react";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Guru" },
      _id: 1,
      description: "this is description",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGg_GZiPH1hVG2NfTnLS45vs5e47I_VQxkg&s",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Enterpreneurs
        </h1>
        <p className="sub_heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid ">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <Startupcard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
