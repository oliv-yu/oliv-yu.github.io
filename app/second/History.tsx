export default function History() {
  return (
    <>
      <p className="text-xs text-blue-400 font-mono mb-1">// Experience</p>

      <div className="flex items-center justify-between">
        <div>
          <div className="mb-1">
            <p className="text-xs text-purple-400 font-mono">2019 - Present</p>
            <h5 className="text-md font-medium text-neutral-200">
              Frontend Engineer @ Liferay
              <span className="text-xs uppercase rounded-3xl border-1 border-slate-400 text-neutral-400 px-2 py-1 ml-2 hover:bg-neutral-600 transition ease-in-and-out duration-100 transition-colors">
                6+ years
              </span>
            </h5>
          </div>
          <div>
            <p className="text-xs text-purple-400 font-mono">2015 - 2019</p>
            <h5 className="text-md font-medium text-neutral-200">
              QA Engineer @ Liferay
              <span className="text-xs uppercase rounded-3xl border-1 border-slate-400 text-neutral-400 px-2 py-1 ml-2 hover:bg-neutral-600 transition ease-in-and-out duration-100 transition-colors">
                4 years
              </span>
            </h5>
          </div>
        </div>
        <a
          href="http://www.liferay.com"
          className="h-12 w-12 rounded-full border border-white/10 flex items-center cursor-pointer justify-center hover:bg-white hover:text-black transition-colors z-10"
        >
          →
        </a>
      </div>
    </>
  );
}
