/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"
import { client, urlFor } from "../lib/client"
import { AiFillGithub } from "react-icons/ai"
const Home = ({ recentProjects, previousProjects }) => {
  return (
    <div>
      <div className="flex px-4 flex-col max-w-7xl mx-auto mt-8">
        <h1 className="text-3xl font-extrabold tracking-tight mb-4">Recent projects</h1>
        <div className=" xl:px-0 flex flex-wrap justify-center  gap-4  pb-12">
          {recentProjects.map((project) => (
            <div
              key={project._id}
              className=" rounded-t-2xl overflow-hidden border rounded-b-xl max-w-md dark:border-none relative"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <img
                  src={urlFor(project.image.asset._ref)}
                  alt=""
                  className="h-[248px] w-full"
                />
              </a>

              <div className="flex items-center gap-4 py-4 border-t px-2 bg-white ">
                {project.technology.map((tech, i) => (
                  <div key={i} className="">
                    <img
                      src={urlFor(tech)}
                      alt=""
                      className="w-10 rounded-t-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-extrabold tracking-tight mb-4">Previous projects</h1>
      <div className=" xl:px-0 flex overflow-x-scroll w-full  gap-4  pb-12">
          {previousProjects.map((project) => (
            <div
              key={project._id}
              className=" rounded-t-2xl overflow-hidden border rounded-b-xl max-w-md dark:border-none relative min-w-[370px]"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <img
                  src={urlFor(project.image.asset._ref)}
                  alt=""
                  className="h-[258px] w-full"
                />
              </a>

              <div className="flex items-center gap-4 py-4 border-t px-2 bg-white ">
                {project.technology.map((tech, i) => (
                  <div key={i} className="">
                    <img
                      src={urlFor(tech)}
                      alt=""
                      className="w-10 rounded-t-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const recentProjects = await client.fetch(
    `*['Recent Projects' in category[]->title]{_id, image, title, url, github, 'technology': technology[]->image.asset._ref}`
  )
  const previousProjects = await client.fetch(
    `*['Previous Projects' in category[]->title]{_id, image, title, url, github, 'technology': technology[]->image.asset._ref}`
  )

  return {
    props: { recentProjects, previousProjects },
  }
}

export default Home