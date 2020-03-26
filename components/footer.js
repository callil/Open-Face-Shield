import License from './license'

export default function Footer() {
  return (
    <div className="border-t mt-6 ">
      <License />
      <a href="https://docs.google.com/forms/d/11XXZrotzLzCnIrczjLMWk2oF3INE4sKMuXCWFPfFO-k/viewform?edit_requested=true">
        <p className="mt-6 text-sm">
          Sign up to receive updates when the design changes.
        </p>
      </a>
      <a href="http://www.nyu.edu/about/news-publications/news/2020/march/NYUResponds.html">
        <img className="mt-6" src="NYU.svg" />
      </a>
    </div>
  )
}
