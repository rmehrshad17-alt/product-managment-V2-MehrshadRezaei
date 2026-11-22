export const errorHandler = (errorData) => {
    errorData.forEach((error) => {
        if (error.code == false) {
            throw new Error(error.message)
        }
    })
}