import React, { useState } from 'react'

import api from '../../api'



export default function Home(props) {

  const [state, setState] = useState({
    country: '',
    countryOfWork: '',
    firstName: '',
    lastName: '',
    holidayAllowance: ' ',
    dateOfBirth: '',
    socialInsuranceNumber: ' ',
    workingHours: ' ',
    numberOfChildren: ' '
  })

  function handleInputChange(event) {
    console.log('entrooooo')
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  const countryList = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Spain', code: 'ES' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV' },
    { name: 'British Indian Ocean Territory', code: 'IO' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX' },
    { name: 'Cocos (Keeling) Islands', code: 'CC' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    { name: 'Cook Islands', code: 'CK' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cote D\'Ivoire', code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK' },
    { name: 'Faroe Islands', code: 'FO' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'French Southern Territories', code: 'TF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
    { name: 'Holy See (Vatican City State)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
    { name: 'Korea, Republic of', code: 'KR' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Lao People\'S Democratic Republic', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia, Federated States of', code: 'FM' },
    { name: 'Moldova, Republic of', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Netherlands Antilles', code: 'AN' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Norfolk Island', code: 'NF' },
    { name: 'Northern Mariana Islands', code: 'MP' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestinian Territory, Occupied', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Pitcairn', code: 'PN' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reunion', code: 'RE' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russian Federation', code: 'RU' },
    { name: 'RWANDA', code: 'RW' },
    { name: 'Saint Helena', code: 'SH' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Pierre and Miquelon', code: 'PM' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia and Montenegro', code: 'CS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
  ]

  function onFormSubmit(e) {
    e.preventDefault();

    console.log(state);


    let newUser = state;

    console.log('PAYLOAD BEING SENT TO BACKEND : ', newUser);
    api.signup(newUser)
      .then(result => {
        console.log('SUCCESS')
        console.log(result);
        props.history.push('/');
      })
      .catch(err => {
        setState({ message: err.toString() });
      })

  }

  function handleClick(e) {
    e.preventDefault()
    let data = {
      country: state.country,
      countryOfWork: state.countryOfWork,
      firstName: state.firstName,
      lastName: state.lastName,
      holidayAllowance: state.holidayAllowance,
      dateOfBirth: state.dateOfBirth,
      socialInsuranceNumber: state.socialInsuranceNumber,
      workingHours: state.workingHours,
      numberOfChildren: state.numberOfChildren
    }
    api
      .signup(data)
      .then(result => {
        console.log('SUCCESS!')
        props.history.push('/') // Redirect to the home page
      })
      .catch(err => setState({ message: err.toString() }))
  }

  if (state.country == "Spain") {
    return (
      <div className="Home">
        <h1 className="mt-5">Employeee Sign Up</h1>
        <div className="container mt-5">
          <label for="countrySelect" className="form-label">Please choose your country</label>
          <form onSubmit={(e) => onFormSubmit(e)}>
            <select className="form-select" aria-label="Default select example" name="country" onChange={handleInputChange}>
              {countryList.map(country => {
                return (
                  <option value={country.name} name={country.name}  >{country.name}</option>
                )

              })}


            </select>
            <div className="row">
              <div className="col-md-12 mt-3">

                <input
                  type="text"
                  className="form-control"
                  value={state.country}
                  name="countryOfWork"
                  placeholder="Country of Work"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mt-3">

                <input
                  type="text"
                  className="form-control"
                  value={state.firstName}
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleInputChange}
                />

              </div>

              <div className="col-md-6 mt-3">

                <input
                  type="text"
                  className="form-control"
                  value={state.lastName}
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                />

              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-3">
                <label for="maritalStatus" className="form-label">Marital Status : </label>

                <select className="form-select" aria-label="Default select example" name="maritalStatus" onChange={handleInputChange}>
                  <option value="single" name="single"  >Single</option>
                  <option value="married" name="married"  >Married</option>
                  <option value="divorced" name="divorced"  >Divorced</option>
                </select>

              </div>

              <div className="col-md-6 mt-3">
                <label for="socialInsuranceNumber" className="form-label">Social insurance number  :</label>
                <input
                  type="text"
                  className="form-control"
                  value={state.socialInsuranceNumber}
                  name="socialInsuranceNumber"
                  placeholder="786-48-78457"
                  onChange={handleInputChange}
                />

              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-3">
                <label for="dob" className="form-label">Date Of Birth:</label>
                <input
                  type="date"
                  className="form-control"
                  value={state.dateOfBirth}
                  name="dateOfBirth"
                  placeholder="DOB"
                  onChange={handleInputChange}
                />

              </div>

              <div className="col-md-6 mt-3">
                <label for="socialInsuranceNumber" className="form-label">Holiday Allowance  :</label>
                <input
                  type="text"
                  className="form-control"
                  value={state.holidayAllowance}
                  name="holidayAllowance"
                  placeholder="60+ days"
                  onChange={handleInputChange}
                />

              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-5 form-control buttonMain">Submit</button>
          </form>
        </div>
      </div>
    )
  }

  if (state.country == "Ghana") {
    return (
      <div className="Home">
        <h1 className="mt-5">Employeee Sign Up</h1>
        <div className="container mt-5">
          <label for="countrySelect" className="form-label">Please choose your country</label>
          <form onSubmit={(e) => onFormSubmit(e)}>
            <select className="form-select" aria-label="Default select example" name="country" onChange={handleInputChange}>
              {countryList.map(country => {
                return (
                  <option value={country.name} name={country.name}  >{country.name}</option>
                )

              })}


            </select>
            <div className="row">
              <div className="col-md-12 mt-3">

                <input
                  type="text"
                  className="form-control"
                  value={state.country}
                  name="countryOfWork"
                  placeholder="Country of Work"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mt-3">

                <input
                  type="text"
                  className="form-control"
                  value={state.firstName}
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleInputChange}
                />

              </div>

              <div className="col-md-6 mt-3">

                <input
                  type="text"
                  className="form-control"
                  value={state.lastName}
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                />

              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-3">
                <label for="firstName" className="form-label">Date Of Birth:</label>
                <input
                  type="date"
                  className="form-control"
                  value={state.dateOfBirth}
                  name="dateOfBirth"
                  placeholder="DOB"
                  onChange={handleInputChange}
                />

              </div>

              <div className="col-md-6 mt-3">
                <label for="firstName" className="form-label">Holiday Allowance :</label>
                <input
                  type="number"
                  className="form-control"
                  value={state.holidayAllowance}
                  name="holidayAllowance"
                  placeholder="30 Days"
                  onChange={handleInputChange}
                />

              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mt-3">
                <label for="maritalStatus" className="form-label">Marital Status : </label>

                <select className="form-select" aria-label="Default select example" name="maritalStatus" onChange={handleInputChange}>
                  <option value="single" name="single"  >Single</option>
                  <option value="married" name="married"  >Married</option>
                  <option value="divorced" name="divorced"  >Divorced</option>
                </select>

              </div>
              <div className="col-md-6 mt-3">
                <label for="numberOfChildren" className="form-label">Number of Children : </label>

                <input
                  type="number"
                  className="form-control"
                  value={state.numberOfChildren}
                  name="numberOfChildren"
                  placeholder="Number of Children"
                  onChange={handleInputChange}
                />
              </div>

            </div>

            <button type="submit" className="btn btn-primary mt-5 form-control buttonMain">Submit</button>
          </form>
        </div>
      </div>
    )
  }

  if (state.country == "Brazil") {
    return (
      <div className="Home">
        <h1 className="mt-5">Employeee Sign Up</h1>
        <div className="container mt-5">
          <label for="countrySelect" className="form-label">Please choose your country</label>
          <form onSubmit={(e) => onFormSubmit(e)}>
            <select className="form-select" aria-label="Default select example" name="country" onChange={handleInputChange}>
              {countryList.map(country => {
                return (
                  <option value={country.name} name={country.name}  >{country.name}</option>
                )

              })}


            </select>
            <div className="row">
              <div className="col-md-12 mt-3">

                <input
                  type="text"
                  className="form-control"
                  value={state.country}
                  name="countryOfWork"
                  placeholder="Country of Work"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mt-3">

                <input
                  type="text"
                  className="form-control"
                  value={state.firstName}
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleInputChange}
                />

              </div>

              <div className="col-md-6 mt-3">

                <input
                  type="text"
                  className="form-control"
                  value={state.lastName}
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                />

              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-3">
                <label for="firstName" className="form-label">Date Of Birth:</label>
                <input
                  type="date"
                  className="form-control"
                  value={state.dateOfBirth}
                  name="dateOfBirth"
                  placeholder="DOB"
                  onChange={handleInputChange}
                />

              </div>

              <div className="col-md-6 mt-3">
                <label for="firstName" className="form-label">Holiday Allowance :</label>
                <input
                  type="number"
                  className="form-control"
                  value={state.holidayAllowance}
                  name="holidayAllowance"
                  max="40"
                  placeholder="20 Days"
                  onChange={handleInputChange}
                />

              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
                <label for="workingHours" className="form-label"># Of Working Hours : </label>
                <input
                  type="number"
                  className="form-control"
                  value={state.workingHours}
                  name="workingHours"
                  placeholder="40h/per week"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-5 form-control buttonMain">Submit</button>
          </form>
        </div>
      </div>
    )
  }


  return (
    <div className="Home">
      <h1 className="mt-5">Employeee Sign Up</h1>
      <div className="container mt-5">
        <label for="countrySelect" className="form-label">Please choose your country</label>
        <form onSubmit={(e) => onFormSubmit(e)}>
          <select className="form-select" aria-label="Default select example" name="country" onChange={handleInputChange}>
            {countryList.map(country => {
              return (
                <option value={country.name} name={country.name}  >{country.name}</option>
              )

            })}


          </select>
          <div className="row">
            <div className="col-md-12 mt-3">

              <input
                type="text"
                className="form-control"
                value={state.country}
                name="countryOfWork"
                placeholder="Country of Work"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-3">

              <input
                type="text"
                className="form-control"
                value={state.firstName}
                name="firstName"
                placeholder="First Name"
                onChange={handleInputChange}
              />

            </div>

            <div className="col-md-6 mt-3">

              <input
                type="text"
                className="form-control"
                value={state.lastName}
                name="lastName"
                placeholder="Last Name"
                onChange={handleInputChange}
              />

            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-3">
              <label for="firstName" className="form-label">Date Of Birth:</label>
              <input
                type="date"
                className="form-control"
                value={state.dateOfBirth}
                name="dateOfBirth"
                placeholder="DOB"
                onChange={handleInputChange}
              />

            </div>

            <div className="col-md-6 mt-3">
              <label for="firstName" className="form-label">Holiday Allowance :</label>
              <input
                type="number"
                className="form-control"
                value={state.holidayAllowance}
                name="holidayAllowance"
                placeholder="30 Days"
                onChange={handleInputChange}
              />

            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-5 form-control buttonMain" onClick={e => handleClick(e)} >Submit</button>
        </form>
      </div>
    </div>
  )
}
