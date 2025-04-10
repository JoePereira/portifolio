import React, { useEffect } from "react";
import NavbarProjetos from "./AllProjetos-comps/NavbarProjetos";
import AllProjetos from "./AllProjetos-comps/AllProjetos";

const AllProjetosPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavbarProjetos />
      <AllProjetos />
    </>
  );
};

export default AllProjetosPage;
