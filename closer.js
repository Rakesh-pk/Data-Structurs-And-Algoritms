function one(){
    let count=0;
    return function(){
        return ++count
    }

    
}



let oldArr = [
    ['A', 'B', 'C', '2'],
    ['A', 'B', 'C', '3'],
    ['A', 'B', 'C', '4'],
    ['A', 'B', 'C', '5'],
  ];
  
  let newArr = [
    ['A', 'B', 'C', '2'],
    ['A', 'B', 'C', '3'],
    ['A', 'B', 'C', '4'],
    ['A', 'B', 'C', '5'],
    ['A', 'B', 'C', '6'],
    ['A', 'B', 'C', '7'],
    ['A', 'B', 'C', '8'],
    ['A', 'B', 'C', '9'],
    ['A', 'B', 'C', '10']
  ];


let arr = [];
newArr.forEach((e) => {
      // Check if e's fourth element exists in oldArr
      if (!oldArr.some(a => a[3] === e[3])) {
        arr.push(e);
      }
  });

// console.log(arr)


//   let data = [
//     [ '22 Feb 2024', 'MCXCCL', 'Mock Trading from Disaster Recovery Site (DRS)', 103 ],
//     [ '22 Feb 2024', 'Membership and Compliance', 'Centrat KYC Registration Agencies (KRAs)', 102 ],
//     [ '21 Feb 2024', 'TECH', 'Mock Trading from Disaster Recovery Site (DRS)', 101 ],
//     [ '21 Feb 2024', 'MCXCCL', 'Delivery & Invoices Settlement Schedule for March 2024 expiry contracts', 100 ]
// ];

// let newCircularData = [
//     ['Feb 2024', 'MCXCCL', 'Mock Trading from Disaster Recovery Site (DRS)', 106 ],
//     ['Feb 2024', 'MCXCCL', 'Mock Trading from Disaster Recovery Site (DRS)', 107 ],
//     [ '22 Feb 2024', 'Membership and Compliance', 'Centrat KYC Registration Agencies (KRAs)', 105 ],
//     [ '21 Feb 2024', 'TECH', 'Mock Trading from Disaster Recovery Site (DRS)', 104 ],
//     [ '21 Feb 2024', 'MCXCCL', 'Delivery & Invoices Settlement Schedule for March 2024 expiry contracts', 103 ],
//     [ '22 Feb 2024', 'Membership and Compliance', 'CenForeign Account  KYC Registration Agencies (KRAs)', 102],
//     [ '21 Feb 2024', 'TECH', 'Mock Trading from Disaster Recovery Site (DRS)', 101],
//     [ '21 Feb 2024', 'MCXCCL', 'Delivery & Invoices Settlement Schedule for March 2024 expiry contracts', 100]
// ];


// let maxSeqNo = Number.MIN_SAFE_INTEGER;

// // Iterate through each subarray using forEach()
// data.forEach(subarray => {
//     let seqNo = subarray[3]; // Get the sequence number from the last element

//     // Update maxSeqNo if the current sequence number is greater
//     if (seqNo > maxSeqNo) {
//         maxSeqNo = seqNo;
//     }
// });

// console.log("Maximum sequence number:", maxSeqNo);
// //let maxSeqNo = 103; // Assuming you already have the maxSeqNo

// // Filter subarrays based on the sequence number
// let filteredSubarrays = newCircularData.filter(subarray => subarray[3] > maxSeqNo);

// console.log("Filtered Subarrays:", filteredSubarrays);


// newCircularData.forEach((e) => {
//     // Check if e's fourth element exists in oldArr
//     if (!data.some(a => a[3] === e[3])) {
//       arr.push(e);
//     }
// });

// console.log(arr)


let data = [
  ["DATE", "SUBJECT", "DEPARTMENT", "CIRCULAR NO", "ATTACHMENT"],
  ["March 05, 2024", "Listing of further issue of Karnataka Bank Limited", "Listing", "NSE/CML/61007", "pdf ATTACHMENT"],
  ["March 05, 2024", "COMMODITY DERIVATIVES - SETTLEMENT SCHEDULE FOR APRIL 2024", "Commodity Derivatives", "NCL/COM/61006", "pdf ATTACHMENT"],
  ["March 05, 2024", "CDS - MONTHLY SETTLEMENT SCHEDULE FOR APRIL 2024", "Currency Derivatives", "NCL/CD/61005", "pdf ATTACHMENT"],
  ["March 05, 2024", "Listing of Partly Paid up Equity Shares allotted on Rights Basis of Adroit Infotech Limited", "Listing", "NSE/CML/61004", "pdf ATTACHMENT"],
  ["March 05, 2024", "Revised MWPL, Participant, Institutional and Non-Institutional Client Limits For CGCL", "Securities Lending & Borrowing Scheme", "NCL/CMPT/61003", "pdf ATTACHMENT"],
  ["March 05, 2024", "Listing of further issues of Securities", "Listing", "NSE/CML/61002", "pdf ATTACHMENT"],
  ["March 05, 2024", "Settlement Calendar for Offer for Sales of shares of Velan Hotels Ltd.", "NSE Clearing - Capital Market", "NCL/CMPT/61001", "pdf ATTACHMENT"],
  ["March 05, 2024", "Trade for Trade - Platinum Industries Limited (IPO)", "Listing", "NSE/CML/61000", "pdf ATTACHMENT"],
  ["March 05, 2024", "Trade for Trade - Purv Flexipack Limited (SME IPO)", "Listing", "NSE/CML/60999", "pdf ATTACHMENT"],
  ["March 05, 2024", "Trade for Trade - Purv Flexipack Limited (SME IPO)", "Emerge", "NSE/CML/60999", "pdf ATTACHMENT"],
  ["March 05, 2024", "Applicability of Short-Term Additional Surveillance Measure (ST-ASM)", "Surveillance & Investigation", "NSE/SURV/60998", "zip ATTACHMENT"],
  ["March 05, 2024", "Listing of privately placed securities on the debt market segment of the Exchange", "Debt Segment", "NSE/CML/60997", "pdf ATTACHMENT"]
];





// function obj_data(data){
//   const headers = data[0];
//          const jsonData = data.slice(1).map(row => {
//              const obj = {};
//              headers.forEach((header, index) => {
//                  obj[header] = row[index];
//              });
//              return obj;
//          });
//  return jsonData;
//  }

//  console.log(obj_data(data))

let oldData = [{
  DATE: 'March 05, 2024',
  SUBJECT: 'Listing of further issues of Securities',
  DEPARTMENT: 'Listing',
  CIRCULARNO: 'NSE/CML/61002',
  ATTACHMENT: 'pdf ATTACHMENT'
},
{
  DATE: 'March 05, 2024',
  SUBJECT: 'Settlement Calendar for Offer for Sales of shares of Velan Hotels Ltd.',
  DEPARTMENT: 'NSE Clearing - Capital Market',
  CIRCULARNO: 'NCL/CMPT/61001',
  ATTACHMENT: 'pdf ATTACHMENT'
},
{
  DATE: 'March 05, 2024',
  SUBJECT: 'Trade for Trade - Platinum Industries Limited (IPO)',
  DEPARTMENT: 'Listing',
  CIRCULARNO: 'NSE/CML/61000',
  ATTACHMENT: 'pdf ATTACHMENT'
},
{
  DATE: 'March 05, 2024',
  SUBJECT: 'Trade for Trade - Purv Flexipack Limited (SME IPO)',
  DEPARTMENT: 'Listing',
  CIRCULARNO: 'NSE/CML/60999',
  ATTACHMENT: 'pdf ATTACHMENT'
},
{
  DATE: 'March 05, 2024',
  SUBJECT: 'Trade for Trade - Purv Flexipack Limited (SME IPO)',
  DEPARTMENT: 'Emerge',
  CIRCULARNO: 'NSE/CML/60999',
  ATTACHMENT: 'pdf ATTACHMENT'
},
{
  DATE: 'March 05, 2024',
  SUBJECT: 'Applicability of Short-Term Additional Surveillance Measure (ST-ASM)',
  DEPARTMENT: 'Surveillance & Investigation',
  CIRCULARNO: 'NSE/SURV/60998',
  ATTACHMENT: 'zip ATTACHMENT'
},
{
  DATE: 'March 05, 2024',
  SUBJECT: 'Listing of privately placed securities on the debt market segment of the Exchange',
  DEPARTMENT: 'Debt Segment',
  CIRCULARNO: 'NSE/CML/60997',
  ATTACHMENT: 'pdf ATTACHMENT'
}]

let identifiers = 'CIRCULARNO'

let oldDataIdentfiers = oldData.map((item)=>{
  if(identifiers.indexOf(',') < 0){
      return item[identifiers];
  }
  else{
      return item[identifiers]
  }
});

//console.log(oldDataIdentfiers)
oldDataIdentfiers = [
  'NSE/CML/61002',
  'NCL/CMPT/61001',
  'NSE/CML/61000',
  'NSE/CML/60999',
  'NSE/SURV/60998',
  'NSE/CML/60997'
]

let newDataIdentfiers = [
  'NSE/CML/61005',
  'NSE/SURV/61004',
  'NSE/CML/61003',
  'NSE/CML/61002',
  'NCL/CMPT/61001',
  'NSE/CML/61000',
  'NSE/CML/60999',
]

// const nonMatchingInNewData = newDataIdentfiers.filter(item => !oldDataIdentfiers.includes(item));
// console.log(nonMatchingInNewData)

// let arr1 = [];
// newDataIdentfiers.forEach((e) => {
//       // Check if e's fourth element exists in oldArr
//       if (!oldDataIdentfiers.some(a => a === e)) {
//         arr.push(e);
//       }
//   });

// console.log(arr1)


let obj = 
[
  {
    DATE: 'March 05, 2024',
    SUBJECT: 'Listing of further issue of Karnataka Bank Limited',
    DEPARTMENT: 'Listing',
    CIRCULARNO: 'NSE/CML/61007',
    ATTACHMENT: 'pdf ATTACHMENT'
  },
  {
    DATE: 'March 05, 2024',
    SUBJECT: 'COMMODITY DERIVATIVES - SETTLEMENT SCHEDULE FOR APRIL 2024',
    DEPARTMENT: 'Commodity Derivatives',
    CIRCULARNO: 'NCL/COM/61006',
    ATTACHMENT: 'pdf ATTACHMENT'
  },
  {
    DATE: 'March 05, 2024',
    SUBJECT: 'CDS - MONTHLY SETTLEMENT SCHEDULE FOR APRIL 2024',
    DEPARTMENT: 'Currency Derivatives',
    CIRCULARNO: 'NCL/CD/61005',
    ATTACHMENT: 'pdf ATTACHMENT'
  },
  {
    DATE: 'March 05, 2024',
    SUBJECT: 'Listing of Partly Paid up Equity Shares allotted on Rights Basis of Adroit Infotech Limited',
    DEPARTMENT: 'Listing',
    CIRCULARNO: 'NSE/CML/61004',
    ATTACHMENT: 'pdf ATTACHMENT'
  },
  {
    DATE: 'March 05, 2024',
    SUBJECT: 'Revised MWPL, Participant, Institutional and Non-Institutional Client Limits For CGCL',
    DEPARTMENT: 'Securities Lending & Borrowing Scheme',
    CIRCULARNO: 'NCL/CMPT/61003',
    ATTACHMENT: 'pdf ATTACHMENT'
  }
]

let identifier = [
  'NSE/CML/61007',
  'NCL/COM/61006',
  'NCL/CD/61005']
//let newArr1 = []
  // identifier.forEach((item)=>{
  //   obj.forEach((ob)=>{
  //     ob['CIRCULARNO'] == item
  //     newArr1.push(ob)
  //   })
  // })

  let newArr1 = obj.filter(item => identifier.includes(item['CIRCULARNO']));
console.log(newArr1)



