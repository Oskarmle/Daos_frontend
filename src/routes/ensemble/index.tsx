import Button from "../../components/button/Button";
import EnsembleListPost from "../../components/ensembleListPost/EnsembleListPost";
import styles from "./ensemble.module.css";

import { useRouter } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { createFileRoute } from "@tanstack/react-router";

// API URL
const baseUrl = "http://localhost:3000";

type EnsemblePost = {
  city: string;
  name: string;
  activeMusicians: string;
  genre: string;
  _id: string;
};

export const Route = createFileRoute("/ensemble/")({
  component: EnsembleComponent,
});

function EnsembleComponent() {
  const router = useRouter();

  const handleCreateEnsembleClick = () => {
    router.navigate({ to: "/ensemble/create" });
  };

  // Fetch ensembles
  const { isError, data, error, isSuccess } = useQuery({
    queryKey: ["ensembles"],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}/ensembles`);
      return response.data;
    },
  });

  if (isError) {
    console.error("Failed to fetch ensembles", error);
  }

  if (isSuccess) {
    console.log("Successfully fetched ensembles", data);
  }

  return (
    <div className={styles.ensembleContainer}>
      <h1 className={styles.header}>Se eller opret en ensemble</h1>
      <div>
        <Button
          buttonText="Opret ensemble"
          variant="secondary"
          onClick={handleCreateEnsembleClick}
        ></Button>
      </div>
      <h2 className={styles.header2}>Alle ensembles</h2>
      <div className={styles.ensembleListContainer}>
        {data &&
          data.map((ensemble: EnsemblePost) => (
            <EnsembleListPost
              key={ensemble.name}
              city={ensemble.city}
              name={ensemble.name}
              size={ensemble.activeMusicians}
              genre={ensemble.genre}
              _id={ensemble._id}
            />
          ))}
      </div>
    </div>
  );
}
