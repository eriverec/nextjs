import Head from "next/head";
import React from "react";
import Link from "next/link";
import ReactDOM from "react-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ArticleCollection } from "../components/ArticleCollection";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

//const queryClient = new QueryClient();

//const toJSON = (_: Response) => _.json();
//const fetcher = fetch("http://localhost:8000/articles").then(toJSON);
//const fetcher = fetch("https://dev.to/api/articles").then(toJSON);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />

      <Example />

      <Footer />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data } = useQuery("articles", () =>
    fetch("https://dev.to/api/articles").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Productos</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 ">
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 pt-6 gap-8 ">
            {data.map((article) => (
              <>
                <div className="rounded rounded p-4  lg:text-center items-start  bg-white shadow">
                  <div className="items-center justify-center font-medium text-base pb-3">
                    {article.title}
                  </div>
                  <img src={article.cover_image} alt={article.title} />
                  <div className=" lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700">
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                          Comprar
                        </a>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                        >
                          Ver
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </main>

      <ReactQueryDevtools />
    </div>
  );
}
