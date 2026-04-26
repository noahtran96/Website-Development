import { CLIENTS, type Client } from "../../constants";
import styles from "../../style";

export const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} w-full flex-wrap`}>
        {CLIENTS.map((client: Client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} min-w-[120px] sm:min-w-[192px]`}
          >
            <img
              src={client.logo}
              alt="client logo"
              className="w-[100px] object-contain sm:w-[192px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
