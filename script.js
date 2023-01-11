const warrentyHeader = document.createElement('h1')
warrentyHeader.textContent = 'Warranty Information'
warrentyHeader.style.fontWeight = 'bold'
document.body.appendChild(warrentyHeader)

const inputValues = ['First Name', 'Last Name', 'Company Name', 'Email', 'Phone Number', 'Fax Number', 'Address', 'City', 'State', 'Zip', 'Country', 'Unit Information', 'Date Purchased', 'Model', 'Warranty Sertial Number']

function createInput(value) {
    let label = document.createElement('label')
    label.textContent = value
    let input = document.createElement('input')

    document.body.appendChild(label)
    document.body.appendChild(input)
}

inputValues.forEach(val => {
    createInput(val)
})




