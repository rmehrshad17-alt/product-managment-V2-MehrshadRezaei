// import image from "../../assets/icons/search.svg"

export const CustomInput = ({ type, placeholder }) => {
    return (
        `
            <div class="custom-input">
                <input type=${type} placeholder=${placeholder} />
            </div>
        `
    )
}