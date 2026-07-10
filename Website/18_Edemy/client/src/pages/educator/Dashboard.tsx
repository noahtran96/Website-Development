import { assets } from "@/assets/assets";
import { Loading } from "@/components/student";
import { DASHBOARD_DATA } from "@/constants/DashboardData";
import { AppContext } from "@/context/AppContext";
import { useContext, useState } from "react";

export const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(DASHBOARD_DATA);
  return dashboardData ? (
    <div className="flex min-h-screen flex-col items-start justify-between gap-8 p-4 pt-8 pb-0 md:p-8 md:pb-0">
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-5">
          <div className="shadow-card flex w-56 items-center gap-3 rounded-md border border-blue-500 p-4">
            <img src={assets.patients_icon} alt="Patient icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData.enrolledStudentsData.length}
              </p>
              <p className="text-base text-gray-500">Total Enrollments</p>
            </div>
          </div>
          <div className="shadow-card flex w-56 items-center gap-3 rounded-md border border-blue-500 p-4">
            <img src={assets.appointments_icon} alt="Appointment icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData.totalCourses}
              </p>
              <p className="text-base text-gray-500">Total Courses</p>
            </div>
          </div>
          <div className="shadow-card flex w-56 items-center gap-3 rounded-md border border-blue-500 p-4">
            <img src={assets.earning_icon} alt="Earning icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData.totalEarnings}
              </p>
              <p className="text-base text-gray-500">Total Earnings</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="pb-4 text-lg font-medium">Latest Enrollments</h2>
          <div className="flex w-full max-w-4xl flex-col items-center overflow-hidden rounded-md border border-gray-500/20 bg-white">
            <table className="w-full table-fixed overflow-hidden md:table-auto">
              <thead className="border-b border-gray-500/20 text-left text-sm text-gray-900">
                <tr>
                  <th className="hidden px-4 py-3 text-center font-semibold sm:table-cell">
                    #
                  </th>
                  <th className="px-4 py-3 font-semibold">Student Name</th>
                  <th className="px-4 py-3 font-semibold">Course Title</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-500">
                {dashboardData.enrolledStudentsData.map(
                  (item, index: number) => (
                    <tr key={index} className="border-b border-gray-500/20">
                      <td className="hidden px-4 py-3 text-center sm:table-cell">
                        {index + 1}
                      </td>
                      <td className="flex items-center space-x-3 px-2 py-3 md:px-4">
                        <img
                          src={item.student.imageUrl}
                          alt="Profile image"
                          className="h-9 w-9 rounded-full"
                        />
                        <span className="truncate">{item.student.name}</span>
                      </td>
                      <td className="truncate px-4 py-3">{item.courseTitle}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
