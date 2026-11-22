import { html } from "../../package/events/index.js"
import { useNavigation } from "../../package/router/router.js"


const AddProduct = () => {

    const navigation = useNavigation()


    return html `
            <div class="form-container" id="formContainer">
                <div class="form-controller">
                    <button onclick=${() => navigation("/")} id="hideFormBtn" type="button">×</button>
                    <form id="createUserForm">
                        <h2>Create New Product</h2>
                        <div class="input-controller">
                            <label for="userImage">Image address</label>
                            <input type="text" id="userImage" name="name" placeholder="">
                        </div>
                        <div class="input-controller">
                            <label for="userName">Title</label>
                            <input type="text" id="userName" name="title" placeholder="" required>
                        </div>

                        <div class="input-controller dis">
                            <label for="userDescription">Description</label>
                            <textarea type="text" id="userDescription" name="description" placeholder=""></textarea>
                        </div>

                        <div class="input-controller">
                            <label for="userDescription">Date</label>
                            <input type="text" id="userDate" name="date" placeholder="YYYY/DD/MM">
                        </div>

                        <div class="btn-controller">
                            <button onclick=${() => navigation("/")} class="create" type="submit">Create</button>
                        </div>
                    </form>
                </div>
            </div>

    `

}

export default AddProduct
