import { Schedule, ScheduleProperties } from "./prototype";

const props: ScheduleProperties = {
    courseId: 1,
    teacherId: 1,
    dateStart: new Date(),
    duration: 1,
    slogan: 'slogan',
    description: 'description',
    price: 1,
    requirements: ['requirements'],
    topics: ['topics'],
    enabled: true
}

const schedule = new Schedule(props)
const scheduleClone = schedule.clone()

schedule.update('new slogan')

console.log("schedule", schedule)
console.log("scheduleClone", scheduleClone)