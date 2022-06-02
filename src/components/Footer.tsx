import { BsGithub } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer>
      <div className="bg-black text-white text-center flex justify-between p-2">
        <p className="max-w-md">
          Created by{' '}
          <a className="text-center text-white" href="#">
            Bhagyashree Walanj
          </a>
        </p>
        <p className="flex float-left justify-between max-w-md  ">
          <BsGithub />
          <span className="ml-2">
            <a
              href="https://github.com/bhagyashreeWalanj/typescript-weather-app"
              className="font-bold"
            >
              Github
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}
