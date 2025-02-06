import { Breadcrumbs } from '../breadcrumb/breadcumb';

export function PendingsPage() {
  return (
    <>
      <Breadcrumbs />
      <div className="grid grid-cols-5 gap-4 p-4">
        <div className="bg-gray-100 p-4 rounded-lg min-h-[200px]">
          <h2 className="text-lg font-semibold mb-2">Backlog</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg min-h-[200px]">
          <h2 className="text-lg font-semibold mb-2">To Do</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg min-h-[200px]">
          <h2 className="text-lg font-semibold mb-2">In Progress</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg min-h-[200px]">
          <h2 className="text-lg font-semibold mb-2">Review</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg min-h-[200px]">
          <h2 className="text-lg font-semibold mb-2">Done</h2>
        </div>
      </div>
    </>
  );
}
