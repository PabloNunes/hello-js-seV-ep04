const knex = require("knex")({
    client: 'sqlite3',
    connection: {
      filename: "./contatos.db"
    }
  })

const operation = process.argv[2]
const operation_data = process.argv[3]
let input_data = []
let format_data = {}


switch (operation) {
    case "insert":
        input_data = operation_data.split(",")
        format_data = { nome: input_data[0], telefone: input_data[1] }
        knex("contato").insert(format_data,"id").then(ret =>{
            console.log("Insert")
            process.exit(0)
        })
        break
    case "update":
        input_data =  operation_data.split(",")
        format_data = { id: input_data[0], nome: input_data[1],telefone: input_data[2] }
        knex("contato").update( format_data ).where('id', '=', input_data[0]).then(ret =>{
            console.log("Update")
            process.exit(0)
        })
        break
    case "delete":
        input_data = operation_data
        format_data = { id: input_data[0]}
        knex("contato").del( format_data ).where('id', '=', input_data[0]).then(ret =>{
            console.log("Delete")
            process.exit(0)
        })
        break
    case "list":
        knex("contato").select().then(ret => {
            console.log(ret)
            process.exit(0)
        })
        break
    default:
        console.log(process.argv[2])
        console.log("ERRO!!!!!!")
}
