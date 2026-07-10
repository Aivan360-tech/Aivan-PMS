import { MdOutlineSettings, MdOutlineConstruction } from 'react-icons/md'

export default function Settings() {
  return (
    <div className="card flex flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-50">
        <MdOutlineSettings className="h-8 w-8 text-navy-400" />
      </div>
      <div>
        <h2 className="text-lg font-bold text-navy-900">Settings</h2>
        <p className="mx-auto mt-1.5 max-w-md text-sm text-navy-400">
          Facility configuration, user roles, and system preferences will be manageable from here
          in a future release.
        </p>
      </div>
      <span className="badge bg-amber-50 text-amber-700">
        <MdOutlineConstruction className="h-3.5 w-3.5" />
        Coming Soon
      </span>
    </div>
  )
}
