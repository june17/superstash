import { CheckCircleIcon, XIcon } from '@heroicons/react/solid'

export default function SuccessAlertDismiss(props) {
  return (
    <div className="rounded-md bg-green-50 p-4 mt-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">{props.message}</p>
        </div>
      </div>
    </div>
  )
}
