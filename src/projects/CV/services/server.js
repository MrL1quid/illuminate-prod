import { createServer } from "miragejs";

const TIMELINE_DATA = [
    {
        "id": 0,
        "date": 2020,
        "title": "Getting in touch with web development",
        "text": "I first started learning Web Development in the programming school 'Mziuri' in Georgia, right after finishing 2 year Game Development course. I learn HTML, CSS and JS, as well as some of the basic html, css and js libraries like Bootstrap and Materialize."
    },
    {
        "id": 1,
        "date": 2021,
        "title": "Learning Back-End",
        "text": "Even though I specialize in React Front-End, during the second semester of the Web Development classes, I learn fundamentals of Back-End as well, including Node js libraries, such as Express and Mongoose."
    },
    {
        "id": 2,
        "date": 2021,
        "title": "Introduction to React and Redux",
        "text": "During the summer of 2021, I started learning React from the courses my teacher had suggested to me, including Udemy and Youtube courses.\r\n"
    },
    {
        "id": 3,
        "date": 2022,
        "title": "Courses to refresh memory",
        "text": "Throughout this time, I had been studying to get into university, therefore, my Web Development skills have gotten dull. Because of this, I decided to take the course, which IT-Hub had suggested on par with Epam. This website was made after completing the course.\r\n"
    },
]

// eslint-disable-next-line
export default function () {
    let edCalled = false

    const server = createServer({
        routes() {
            this.get("/api/err", () => {
                throw new Error('Request rejected');
            }, { timing: 1500 })
            this.get("/api/educations", () => {
                edCalled = true;

                return {
                    data: TIMELINE_DATA
                }
            }, { timing: 3000 })
        },
    })
    const check = () => {
        if (edCalled) {
            console.log("server closing...");
            server.shutdown()
        } else {
            delay()
        }
    }
    const delay = async () => {
        await new Promise((res, rej) => setTimeout(()=>{check()}, 500))
    }
    check()
    return server
}