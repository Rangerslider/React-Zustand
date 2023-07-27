

/*https://docs.pmnd.rs/zustand/getting-started/introduction----docs
https://github.com/pmndrs/zustand---github  */ 



//middleware eta code er information browser e checkable korer bebosta korte help kore .
//persist help for data store in the local store of browser 
//The devtools middleware takes the store function as its first argument.devtools will only log actions from each separated store, unlike in a typical combined reducers Redux store.
import create from 'zustand';
import {devtools, persist} from 'zustand/middleware' 


//store holo hook "usestore" hook bole and set fuction merge kore state ke such as fuction ,object.
const courseStore = (set) => ({
    courses: [],
    addCourse: (course) => {
        set((state) => ({
            courses: [course, ...state.courses],
        }))
    },
    removeCourse: (courseId) => {
        set((state) => ({
            courses: state.courses.filter((c) => c.id !== courseId) //filter is using for remove function
        }))
    },
    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.courses.map((course) => course.id === courseId ? {...course, completed: !course.completed} : course)
        }))
    }
})
/*first e course er jonne create korsi ekta function seta holo courseStore and course remove and course id ccreate kore maping korsi but the main  thing is zustand usestore 
die kaj kore and usestore holo main hook ja sob data ke store korbe*/
 /* so amra full coursestore created function ke UsecoruseStore e  store korlam with  using devtools and persists function.
 */

const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: "courses",
        })
    )
)

export default useCourseStore;