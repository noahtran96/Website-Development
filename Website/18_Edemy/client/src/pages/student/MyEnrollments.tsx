export const MyEnrollments = () => {
  return (
    <>
      <div className="px-8 pt-10 md:px-36">
        <h1 className="text-2xl font-semibold">My Enrollments</h1>
        <table className="mt-10 w-full table-fixed overflow-hidden border md:table-auto">
          <thead className="border-b border-gray-500/20 text-left text-sm text-gray-900 max-sm:hidden">
            <tr>
              <th className="truncate px-4 py-3 font-semibold">Course</th>
              <th className="truncate px-4 py-3 font-semibold">Duration</th>
              <th className="truncate px-4 py-3 font-semibold">Completed</th>
              <th className="truncate px-4 py-3 font-semibold">Status</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};
