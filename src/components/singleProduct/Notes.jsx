import React from "react";

const Notes = () => {
  const notes = {
    topnotes: [
      {
        img: "https://i.pinimg.com/736x/f3/8f/ff/f38fff4c1cec0537c79870a383e13371.jpg",
        value: "Blackcurrant",
      },
      {
        img: "https://i.pinimg.com/736x/57/fa/ed/57faed275d93d7af5a3f371adaf627e6.jpg",
        value: "Italian Bergamot",
      },
      {
        img: "https://i.pinimg.com/736x/ff/7b/c0/ff7bc0563651ed76ef795f977e587356.jpg",
        value: "Apple",
      },
      {
        img: "https://i.pinimg.com/1200x/ff/70/9b/ff709bbc4d84971331aa44e5bb104bff.jpg",
        value: "Pineapple",
      },
    ],
    heartnotes: [
      {
        img: "https://i.pinimg.com/736x/ae/14/b8/ae14b8b368d6929661e19c431159078f.jpg",
        value: "Rose",
      },
      {
        img: "https://i.pinimg.com/736x/72/18/90/721890a7d0040b7d05a8803e12019be0.jpg",
        value: "Jasmine",
      },
      {
        img: "https://i.pinimg.com/1200x/26/fc/69/26fc696dd2b85de326e171062c95bbfc.jpg",
        value: "Patchouli",
      },
    ],
    basenotes: [
      {
        img: "https://i.pinimg.com/1200x/e6/2d/79/e62d7909e25585c0cd6e5845cb47fb2d.jpg",
        value: "Oakmoss",
      },
      {
        img: "https://i.pinimg.com/736x/6b/63/5d/6b635deaff294cdfd66d96ed227a080e.jpg",
        value: "Ambergris",
      },
      {
        img: "https://i.pinimg.com/1200x/cd/05/3f/cd053ffa7f6749bb9b08b3df0ed2e0bb.jpg",
        value: "Vanilla",
      },
      {
        img: "https://i.pinimg.com/1200x/71/69/e5/7169e54b41c2813a66d9e168d95ccafc.jpg",
        value: "Musk",
      },
    ],
  };

  return (
    <section className="w-full h-fit py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
      <div className="flex flex-col gap-8 w-full h-fit  md:items-center">
        <h3 className="text-xl font-medium underline">Top notes</h3>
        <div className="flex flex-col gap-2">
          {notes.topnotes.map((note, index) => (
            <div key={index} className="flex items-center space-y-3">
              <img
                src={note.img}
                alt={note.value}
                className="w-8 h-8 mr-2 object-cover rounded"
              />
              <span>{note.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full h-fit  md:items-center">
        <h3 className="text-xl font-medium underline">Heart notes</h3>
        <div className="flex flex-col gap-2">
          {notes.heartnotes.map((note, index) => (
            <div key={index} className="flex items-center space-y-3">
              <img
                src={note.img}
                alt={note.value}
                className="w-8 h-8 mr-2 object-cover rounded"
              />
              <span>{note.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full h-fit  md:items-center">
        <h3 className="text-xl font-medium underline">Base notes</h3>
        <div className="flex flex-col gap-2">
          {notes.basenotes.map((note, index) => (
            <div key={index} className="flex items-center space-y-3">
              <img
                src={note.img}
                alt={note.value}
                className="w-8 h-8 mr-2 object-cover rounded"
              />
              <span>{note.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notes;
