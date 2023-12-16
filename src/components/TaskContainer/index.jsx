import { TaskCard } from '../TaskCard';
export const TaskContainer = () => {
  return (
    <div
      className="flex items-center mx-12 gap-6
    6 w-full h-screen"
    >
      <TaskCard taskName="To do" className="flex-auto" />
      {/* <TaskCard taskName="Doing" className="flex-auto" /> */}
      {/* <TaskCard taskName="QA" className="flex-auto" />
      <TaskCard taskName="Done" className="flex-auto" /> */}
    </div>
  );
};
