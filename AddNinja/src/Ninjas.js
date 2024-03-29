import React from "react";
import "./ninjas.css";

const Ninjas = ({ ninjas, deleteNinja }) => {
  // const ninjaList = ninjas.map(ninja => {
  //   if (ninja.age > 20) {
  //     return (
  //       <div className="ninja" key={ninja.id}>
  //         <div>Name: {ninja.name} </div>
  //         <div>Age: {ninja.age}</div>
  //         <div>Belt: {ninja.belt}</div>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // });

  // const ninjaList = ninjas.map(ninja => {
  //   return ninja.age > 20 ? (
  //     <div className="ninja" key={ninja.id}>
  //       <div>Name: {ninja.name} </div>
  //       <div>Age: {ninja.age}</div>
  //       <div>Belt: {ninja.belt}</div>
  //     </div>
  //   ) : null;
  // });
  return (
    <div className="ninja-list">
      {ninjas.map(ninja => {
        return ninja.age > 20 ? (
          <div className="ninja" key={ninja.id}>
            <div>Name: {ninja.name} </div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
            <div>Weight: {ninja.weight}kg</div>
            <button
              onClick={() => {
                deleteNinja(ninja.id);
              }}
            >
              Delete ninja
            </button>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Ninjas;
