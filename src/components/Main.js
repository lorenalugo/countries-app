import { useEffect, useState } from "react";
import API from "../config/api";
import Card from "../components/Card";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    API("/all")
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container mx-auto max-w-screen-xl">
      <div className="flex flex-wrap justify-center lg:justify-start">
        {data.length > 0 ? (
          data.map((item) => <Card item={item} key={item.name.common} />)
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
};

export default Main;
