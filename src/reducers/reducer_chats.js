export default function () {
    return [
        {
            messages: [{ message: "Hey, I have a really bad problem with my computer, can you help me fix it?", sender: 1 }],
            suggestions: ["Hey Bob, can you start by describing what exactly you are having trouble with?"],
            summary: "Insert quick summary of last 10 lines of conversation here",
            name: "Bob Smith"
        },
        {
            messages: [{ message: "Hey, I have a really bad problem with my laptop, can you help me fix it?", sender: 1 }],
            suggestions: ["Hey Joe, can you start by describing what exactly you are having trouble with?"],
            summary: "Insert quick summary of last 10 lines of conversation here",
            name: "Joe Smith"
        },
        {
            messages: [{ message: "Hey, I have a really bad problem with my desktop, can you help me fix it?", sender: 1 }],
            suggestions: ["Hey Adam, can you start by describing what exactly you are having trouble with?"],
            summary: "Insert quick summary of last 10 lines of conversation here",
            name: "Adam Fields"
        }
    ];
}