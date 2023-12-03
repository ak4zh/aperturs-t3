import { type ReactElement } from "react";
import { Layout } from "~/components";
import { QueueNav } from "~/components/queue/queue";

function Queue() {
  return (
    <div className="group relative flex justify-center">
      <div className="absolute z-50 hidden  h-full w-full place-content-center bg-black bg-opacity-20 group-hover:grid">
        Comming Soon...
      </div>
      <QueueNav />
    </div>
  );
}

Queue.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Queue;
