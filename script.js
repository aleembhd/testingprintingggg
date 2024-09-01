const students = [

  { rollNumber: '22WJ1A0465', name: 'DASARI JOSEPH DAVID PAUL', parentPhone: '9866775630', parentName: 'DASARI PRASADA RAO', studentPhone: '8985002400' },
  { rollNumber: '22WJ1A0466', name: 'DEVIREDDY POOJITHA', parentPhone: '9908877647', parentName: 'DEVIREDDY RAGHAVA REDDY', studentPhone: '9908877647' },
  { rollNumber: '22WJ1A0467', name: 'DHARAVATH NAVEEN', parentPhone: '9652727976', parentName: 'DHARAVATH SHIVA', studentPhone: '9505079769' },
  { rollNumber: '22WJ1A0468', name: 'DODDA AKHIL', parentPhone: '9502657588', parentName: 'DODDA RAMESH', studentPhone: '7671821182' },
  { rollNumber: '22WJ1A0469', name: 'DODDA JYOTHIKA', parentPhone: '9963614071', parentName: 'DODDA YUGENDER', studentPhone: '9849192450' },
  { rollNumber: '22WJ1A0470', name: 'DONTHA ROSHAN', parentPhone: '9441327856', parentName: 'DONTHA VIJAY', studentPhone: '9391802820' },
  { rollNumber: '22WJ1A0471', name: 'DORISHETTI SAI', parentPhone: '9959768900', parentName: 'DORISHETTI LACHAIAH', studentPhone: '9676467491' },
  { rollNumber: '22WJ1A0472', name: 'DUDAPAKA GANESH', parentPhone: '8897443818', parentName: 'DUDAPAKA MAHESH', studentPhone: '8074428864' },
  { rollNumber: '22WJ1A0473', name: 'DUNUKU HANOKU', parentPhone: '9948925594', parentName: 'DUNUKU KRISHNA', studentPhone: '8790358178' },
  { rollNumber: '22WJ1A0474', name: 'E V S KRISHNA SAKET', parentPhone: '7702037926', parentName: 'E V S RAJANIKANTH', studentPhone: '9618479484' },
  { rollNumber: '22WJ1A0475', name: 'EDAM MANISHANKAR', parentPhone: '9848325065', parentName: 'EDAM PANDU', studentPhone: '9848325065' },
  { rollNumber: '22WJ1A0476', name: 'EDAMONI SAIDULU YADAV', parentPhone: '6302143870', parentName: 'EDAMONI THIRUPATHAIAH', studentPhone: '7569147142' },
  { rollNumber: '22WJ1A0477', name: 'EDLA JEEVANA', parentPhone: '8179041746', parentName: 'EDLA YADAGIRI', studentPhone: '9959670408' },
  { rollNumber: '22WJ1A0478', name: 'ENUGULA RAMCHARAN', parentPhone: '8374928437', parentName: 'ENUGULA NARSAIAH', studentPhone: '9866330126' },
  { rollNumber: '22WJ1A0479', name: 'ESLAVATH GANESH', parentPhone: '7032832116', parentName: 'ESLAVATH PRAVEEN', studentPhone: '7032162116' },
  { rollNumber: '22WJ1A0480', name: 'ESLAVATH NAGARAJU', parentPhone: '9553862669', parentName: 'ESLAVATH CHANDAR', studentPhone: '6300057024' },
  { rollNumber: '22WJ1A0481', name: 'G PAVANI', parentPhone: '9441872094', parentName: 'G BUCHANNA', studentPhone: '8008371730' },
  { rollNumber: '22WJ1A0482', name: 'G PRAVEEN KUMAR', parentPhone: '9949767591', parentName: 'G GOVINDU', studentPhone: '9381468893' },
  { rollNumber: '22WJ1A0483', name: 'G UDAY KIRAN', parentPhone: '9989357805', parentName: 'G ASHOK KUMAR', studentPhone: '9640327805' },
  { rollNumber: '22WJ1A0484', name: 'GADDAM NARESH', parentPhone: '9618249816', parentName: 'GADDAM VENKATESHWARLU', studentPhone: '7981433822' },
  { rollNumber: '22WJ1A0485', name: 'GADE SHIVAJI', parentPhone: '9533472796', parentName: 'GADE NARSINGA RAO', studentPhone: '6301247924' },
  { rollNumber: '22WJ1A0486', name: 'GAJBEERKAR SRAVAN KUMAR', parentPhone: '7702763794', parentName: 'GAJBEERKAR HUSSAIN', studentPhone: '7993556024' },
  { rollNumber: '22WJ1A0487', name: 'GAJJALA VENKATESH', parentPhone: '9908994896', parentName: 'GAJJALA HARIBABU', studentPhone: '9676248621' },
  { rollNumber: '22WJ1A0488', name: 'GAMINI NAGAKRISHNA BHANU PRAKASH RAO', parentPhone: '9441341984', parentName: 'GAMINI VENKATRATHNAM', studentPhone: '9121008262' },
  { rollNumber: '22WJ1A0489', name: 'GANAPURAM SRAVANTHI', parentPhone: '9849207405', parentName: 'GANAPURAM KRISHNAIAH', studentPhone: '9182244302' },
  { rollNumber: '22WJ1A0490', name: 'GANDU KISHORE', parentPhone: '8187003992', parentName: 'GANDU RADHA KRISHNA', studentPhone: '9347883602' },
  { rollNumber: '22WJ1A0491', name: 'GANDU VINAY', parentPhone: '9951504761', parentName: 'GANDU KRISHNA MURTHI', studentPhone: '8501047611' },
  { rollNumber: '22WJ1A0492', name: 'GEENUGAPALLI KARUNYA', parentPhone: '9963440040', parentName: 'GEENUGAPALLI SRINAIAH', studentPhone: '7330797337' },
  { rollNumber: '22WJ1A0493', name: 'GILAKATHULA SAI TEJA', parentPhone: '8341116779', parentName: 'GILAKATHULA RAMESH', studentPhone: '6303073686' },
  { rollNumber: '22WJ1A0494', name: 'GOLLA YESHWANTH', parentPhone: '7989171135', parentName: 'G SATYA NARAYANA', studentPhone: '6305448795' },
  { rollNumber: '22WJ1A0495', name: 'GOPE NAGESHWARI', parentPhone: '9010250242', parentName: 'GOPE RAVI', studentPhone: '8688463028' },
  { rollNumber: '22WJ1A0496', name: 'GOSHETTI AJAY', parentPhone: '9849540690', parentName: 'GOSHETTI RAMESH', studentPhone: '9392827134' },
  { rollNumber: '22WJ1A0497', name: 'GOUTHAM RAJKUMAR', parentPhone: '7337564877', parentName: 'GOUTHAM RAJAIAH', studentPhone: '7080730302' },
  { rollNumber: '22WJ1A0498', name: 'GUDLANARVA AJAY KUMAR', parentPhone: '7569588530', parentName: 'GUDLANARVA JANGAIAH', studentPhone: '9505570853' },
  { rollNumber: '22WJ1A0499', name: 'GUGULOTH SWETHA', parentPhone: '9848236841', parentName: 'GUGULOTH SRINU', studentPhone: '9347817119' },
  { rollNumber: '22WJ1A04A0', name: 'GUNDABOINA MADHAVI', parentPhone: '8897425078', parentName: 'GUNDBOINA VENKATAIAH', studentPhone: '9381169435' },
  { rollNumber: '22WJ1A04A1', name: 'GUNDALA RAKESH', parentPhone: '9849149359', parentName: 'GUNDALA NARSIMHA', studentPhone: '8374019884' },
  { rollNumber: '22WJ1A04A2', name: 'GUNNA ADITHYA', parentPhone: '9550090898', parentName: 'GUNNA KRISHNAIAH', studentPhone: '8047132002' },
  { rollNumber: '22WJ1A04A3', name: 'GUNTAKANDLA NANDHA KISHOR', parentPhone: '6305625791', parentName: 'GUNTAKANDLA SUJATHA', studentPhone: '9347182379' },
  { rollNumber: '22WJ1A04A4', name: 'GURRALA ANUSHA', parentPhone: '9866153878', parentName: 'G BALAIAH', studentPhone: '9381713386' },
  { rollNumber: '22WJ1A04A5', name: 'GURRAPU PRANATHI', parentPhone: '9948911088', parentName: 'GURRAPU GOVARDHAN', studentPhone: '9550289145' },
  { rollNumber: '22WJ1A04A6', name: 'HANUMANDLA VAMSHI', parentPhone: '9390752715', parentName: 'HANUMANDLA BABU', studentPhone: '8919736230' },
  { rollNumber: '22WJ1A04A7', name: 'HARIJAN MADHU', parentPhone: '9666541502', parentName: 'HARIJAN DASTHAIAH', studentPhone: '8919782836' },
  { rollNumber: '22WJ1A04A8', name: 'INAPANURI SURESH', parentPhone: '9640828823', parentName: 'INAPANURI PRASADA RAO', studentPhone: '9392219047' },
  { rollNumber: '22WJ1A04A9', name: 'J HARSHITHA', parentPhone: '9948759243', parentName: 'J RAJESHWAR', studentPhone: '6302943141' },
  { rollNumber: '22WJ1A04B0', name: 'JADI SHIVAMANI', parentPhone: '9381055992', parentName: 'JADI ASHOK', studentPhone: '9959957702' },
  { rollNumber: '22WJ1A04B1', name: 'JADI VARUN TEJA', parentPhone: '9441603591', parentName: 'JADI YUGENDER', studentPhone: '7842411051' },
  { rollNumber: '22WJ1A04B2', name: 'JAKKULA GOPI KRISHNA', parentPhone: '9989648077', parentName: 'JAKKULA LINGAIAH', studentPhone: '9550858077' },
  { rollNumber: '22WJ1A04B3', name: 'JAMALPUR REVANTH', parentPhone: '9849092541', parentName: 'JAMALPUR BALARAJU', studentPhone: '9346935308' },
  { rollNumber: '22WJ1A04B5', name: 'JARAPALA VASU', parentPhone: '9849634938', parentName: 'JARAPALA BALU', studentPhone: '6304282917' },
  { rollNumber: '22WJ1A04B6', name: 'JERRIPOTHULA AKHILA', parentPhone: '9666227484', parentName: 'JERRIPOTHULA SAIDULU', studentPhone: '9030609718' },
  { rollNumber: '22WJ1A04B7', name: 'JONNAWADA CHENCHU LAXMI PRIYA', parentPhone: '9848606828', parentName: 'J RADHA KRISHNA', studentPhone: '7569127774' },
  { rollNumber: '22WJ1A04B8', name: 'JULAKANTI SRILAXMI', parentPhone: '9949722564', parentName: 'JULAKANTI NAGARAJU', studentPhone: '8247793771' },
  { rollNumber: '22WJ1A04B9', name: 'K ARCHANA', parentPhone: '9908166147', parentName: 'K MADHAVACHARI', studentPhone: '8639925355' },
  { rollNumber: '22WJ1A04C0', name: 'K SURI', parentPhone: '9133534811', parentName: 'K RAMULU', studentPhone: '6302724327' },
  { rollNumber: '22WJ1A04C1', name: 'K VARDHAN KUMAR GOUD', parentPhone: '9703733327', parentName: 'K JAGADEESWAR GOUD', studentPhone: '6303290655' },
  { rollNumber: '22WJ1A04C2', name: 'KADARI ABHIGNA', parentPhone: '9885774872', parentName: 'KADARI VENKANNA', studentPhone: '9381365911' },
  { rollNumber: '22WJ1A04C3', name: 'KAIKALA CHIRU MANI SANDEEP', parentPhone: '9948604599', parentName: 'KAIKALA VENKATESWRA PRASAD', studentPhone: '9502210299' },
  { rollNumber: '22WJ1A04C4', name: 'KALLEM VINAY', parentPhone: '9849264353', parentName: 'KALLEM SRINIVAS', studentPhone: '8179323132' },
  { rollNumber: '22WJ1A04C5', name: 'KANCHARAKUNTLA MADHUKAR REDDY', parentPhone: '9010979305', parentName: 'KANCHARAKUNTLA NARSI REDDY', studentPhone: '9573362716' },
  { rollNumber: '22WJ1A04C6', name: 'KANNEKANTI THARUNI', parentPhone: '9394600128', parentName: 'KANNEKANTI JANARDHANA CHARY', studentPhone: '9573062637' },
  { rollNumber: '22WJ1A04C7', name: 'KANNEVENA KARTHIK', parentPhone: '6305872367', parentName: 'ILAIAH', studentPhone: '7337281797' },
  { rollNumber: '22WJ1A04C8', name: 'KAPPARI SRUJANA REDDY', parentPhone: '9989342688', parentName: 'KAPPARI BADRA REDDY', studentPhone: '7396242688' },
  { rollNumber: '23WJ5A0411', name: 'KAMUTAM DAMODHAR', parentPhone: '9000355841', parentName: 'Devaraju', studentPhone: '8977171841' },
  { rollNumber: '23WJ5A0412', name: 'KATAMONI PRATHYUSH GOUD', parentPhone: '9640412552', parentName: '', studentPhone: '7993075875' },
  { rollNumber: '23WJ5A0413', name: 'KOTIMIRI VIVEK KUMAR', parentPhone: '9550578681', parentName: '', studentPhone: '6304269458' },
  { rollNumber: '23WJ5A0414', name: 'MAHADEVUNI NAVYA', parentPhone: '9948128561', parentName: '', studentPhone: '9704484691' },
  { rollNumber: '23WJ5A0415', name: 'MD SALMAN', parentPhone: '8106150473', parentName: 'MD Khaja', studentPhone: '9652047325' },
  { rollNumber: '21WJ1A04K1', name: 'M. ADNAN', parentPhone: '9642337786', parentName: 'Nayeem hussain', studentPhone: '8008065856' },
];

let messageLogs = [];

// Simulated server-side database
const localStorageDatabase = {
  saveMessage: function (log) {
    let messages = JSON.parse(localStorage.getItem('messageLogs')) || [];
    messages.push(log);
    this.cleanupOldMessages(messages);
    localStorage.setItem('messageLogs', JSON.stringify(messages));
  },
  getAllMessages: function () {
    return JSON.parse(localStorage.getItem('messageLogs')) || [];
  },
  cleanupOldMessages: function (messages) {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const filteredMessages = messages.filter(log => new Date(log.timestamp) > oneMonthAgo);
    localStorage.setItem('messageLogs', JSON.stringify(filteredMessages));
  },
  clearAllLogs: function () {
    localStorage.removeItem('messageLogs');
  }
};

document.addEventListener('DOMContentLoaded', function () {
  fetchMessagesFromServer();
  periodicCleanup();
  setupEventListeners();
});

function fetchMessagesFromServer() {
  messageLogs = localStorageDatabase.getAllMessages();
  updateMessageLogs();
}

function periodicCleanup() {
  const messages = localStorageDatabase.getAllMessages();
  localStorageDatabase.cleanupOldMessages(messages);
}

function setupEventListeners() {
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) searchBtn.addEventListener('click', toggleSearch);

  const whatsappParentBtn = document.getElementById('whatsappParentBtn');
  if (whatsappParentBtn) {
    whatsappParentBtn.addEventListener('click', toggleWhatsAppParent);
  }

  const sendCustomMessageBtn = document.getElementById('sendCustomMessageBtn');
  if (sendCustomMessageBtn) {
    sendCustomMessageBtn.addEventListener('click', sendCustomWhatsAppMessage);
  }

  const printBtn = document.getElementById('printBtn');
  if (printBtn) printBtn.addEventListener('click', openPrintModal);

  const closeModalBtn = document.getElementById('closeModal');
  if (closeModalBtn) closeModalBtn.addEventListener('click', closePrintModal);

  const printPreviewBtn = document.getElementById('printPreviewBtn');
  if (printPreviewBtn) printPreviewBtn.addEventListener('click', showPrintPreview);

  const clearLogsBtn = document.getElementById('clearLogsBtn');
  if (clearLogsBtn) clearLogsBtn.addEventListener('click', clearAllLogs);

  // Initialize date inputs with current date range
  const today = new Date();
  const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());

  const startDateInput = document.getElementById('startDate');
  const endDateInput = document.getElementById('endDate');
  if (startDateInput) startDateInput.value = oneMonthAgo.toISOString().split('T')[0];
  if (endDateInput) endDateInput.value = today.toISOString().split('T')[0];

  const exportLogsBtn = document.getElementById('exportLogsBtn');
  if (exportLogsBtn) exportLogsBtn.addEventListener('click', exportMessageLogs);

  const studentsBtn = document.getElementById('studentsBtn');
  if (studentsBtn) studentsBtn.addEventListener('click', openStudentsPage);
}

function toggleSearch() {
  const profileCard = document.getElementById('profileCard');
  if (profileCard.style.display === 'none') {
    searchStudent();
  } else {
    profileCard.style.display = 'none';
  }
}

function toggleWhatsAppParent() {
  const customMessageArea = document.getElementById('customMessageArea');
  if (customMessageArea.style.display === 'none' || customMessageArea.style.display === '') {
    customMessageArea.style.display = 'block';
  } else {
    customMessageArea.style.display = 'none';
  }
}

function searchStudent() {
  const rollNumber = document.getElementById('rollNumber').value.toUpperCase();
  const student = students.find(s => s.rollNumber.toUpperCase().endsWith(rollNumber));
  const profileCard = document.getElementById('profileCard');

  // Hide the profile card first
  profileCard.style.display = 'none';

  if (student) {
    document.getElementById('studentName').textContent = student.name;
    document.getElementById('studentRoll').textContent = student.rollNumber;
    document.getElementById('parentName').textContent = student.parentName || 'Not available';
    document.getElementById('parentPhone').textContent = student.parentPhone;
    document.getElementById('studentPhone').textContent = student.studentPhone || 'Not available';

    profileCard.style.display = 'block';
    profileCard.classList.add('fade-in');
  } else {
    alert('Student not found. Please check the roll number and try again.');
  }
}

function toggleBulkMessageForm() {
  const bulkMessageForm = document.getElementById('bulkMessageForm');
  if (bulkMessageForm.style.display === 'none') {
    bulkMessageForm.style.display = 'block';
    bulkMessageForm.classList.add('fade-in');
    document.getElementById('bulkMessageContent').value = ''; // Clear previous message
  } else {
    bulkMessageForm.style.display = 'none';
  }
}

function toggleCRProfiles() {
  const crProfiles = document.getElementById('crProfiles');
  if (crProfiles.style.display === 'none') {
    showCRProfiles();
    crProfiles.style.display = 'block';
    crProfiles.classList.add('fade-in');
  } else {
    crProfiles.style.display = 'none';
  }
}

function showCRProfiles() {
  const crProfiles = document.getElementById('crProfiles');
  crProfiles.innerHTML = ''; // Clear existing profiles

  const crs = [
    { name: 'D.Akhil', rollNumber: '22WJ1A0468', email: '22WJ1A0468@gniindia.org', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
    { name: 'J.Harshitha', rollNumber: '22WJ1A04A9', email: '22WJ1A04A9@gniindia.org', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
  ];

  crs.forEach(cr => {
    const profileCard = document.createElement('div');
    profileCard.className = 'profile-card cr-card';
    profileCard.innerHTML = `
      <div class="cr-info">
        <h3>${cr.name}</h3>
        <p><strong>Roll Number:</strong> ${cr.rollNumber}</p>
        <p><strong>Email:</strong> ${cr.email}</p>
        <button onclick="callCR('${cr.rollNumber}')">Call</button>
        <button onclick="whatsappCR('${cr.rollNumber}')">WhatsApp</button>
      </div>
    `;
    crProfiles.appendChild(profileCard);
  });
}

function openPrintModal() {
  document.getElementById('printModal').style.display = 'block';
}

function closePrintModal() {
  document.getElementById('printModal').style.display = 'none';
}

function filterData() {
  const startDate = new Date(document.getElementById('startDate').value);
  const endDate = new Date(document.getElementById('endDate').value);
  endDate.setHours(23, 59, 59, 999); // Set to end of day

  return messageLogs.filter(log => {
    const logDate = new Date(log.timestamp);
    return logDate >= startDate && logDate <= endDate;
  });
}

function generatePrintableTable(data) {
  let tableHtml = `
    <div style="text-align: center; margin-bottom: 20px;">
      <p>Message Logs Report</p>
    </div>
    <table border="1">
      <thead>
        <tr>
          <th>Date</th>
          <th>Sender</th>
          <th>Recipient</th>
          <th>Student Name</th>
          <th>Roll Number</th>
          <th>Parent Name</th>
          <th style="width: 25%;">Message</th>
          <th>Status</th>
          <th>Platform</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
  `;

  let currentDate = '';
  data.forEach(log => {
    const date = new Date(log.timestamp);
    const dateString = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const highlightClass = dateString !== currentDate ? 'highlight' : '';
    currentDate = dateString;

    tableHtml += `
      <tr class="${highlightClass}">
        <td>${dateString}</td>
        <td>${log.sender}</td>
        <td>${log.recipient}</td>
        <td>${log.studentName || ''}</td>
        <td>${log.studentRoll || ''}</td>
        <td>${log.parentName || ''}</td>
        <td style="width: 25%;">${log.message}</td>
        <td>${log.status}</td>
        <td>${log.platform || 'SMS'}</td>
        <td>${log.duration || 'N/A'}</td>
      </tr>
    `;
  });

  tableHtml += `
      </tbody>
    </table>
    <div style="text-align: center; margin-top: 20px;">
      <!-- <p>© 2024 Croxton Technologies. All rights reserved.</p> -->
    </div>
  `;

  return tableHtml;
}

function showPrintPreview() {
  const filteredData = filterData();
  const printContent = generatePrintableTable(filteredData);
  const startDate = new Date(document.getElementById('startDate').value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const endDate = new Date(document.getElementById('endDate').value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  // Open a new window for the print preview
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Message Logs ${startDate} to ${endDate}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
          }
          .header, .footer {
            text-align: center;
            margin-bottom: 20px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            font-size: 12px;
          }
          th {
            background-color: #f2f2f2;
            font-weight: bold;
          }
          .highlight {
            background-color: #ffffd0;
          }
          td:nth-child(7) {
            width: 25%;
            word-break: break-word;
          }
          @media print {
            @page {
              size: A4 landscape;
              margin: 10mm;
            }
            body {
              padding: 0;
            }
            .no-print {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
        
          <p>Date Range: ${startDate} to ${endDate}</p>
        </div>
        ${printContent}
        <div class="footer">
          <p>© 2024 Croxton Technologies. All rights reserved.</p>
        </div>
        <div class="no-print" style="text-align: center; margin-top: 20px;">
          <button onclick="window.print()" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin: 5px; cursor: pointer;">Print</button>
          <button onclick="savePDF()" style="background-color: #2196F3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin: 5px; cursor: pointer;">Save as PDF</button>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
        <script>
          function savePDF() {
            const element = document.body;
            const opt = {
              margin:       10,
              filename:     'Message_Logs_${startDate}_to_${endDate}.pdf',
              image:        { type: 'jpeg', quality: 0.98 },
              html2canvas:  { scale: 2 },
              jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' }
            };
            html2pdf().from(element).set(opt).save();
          }
          window.onload = function() {
            // Automatically open print dialog when the page loads
            window.print();
          }
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();

  // Hide the modal
  document.getElementById('printModal').style.display = 'none';
}

function updateMessageLogs() {
  const logsContainer = document.getElementById('messageLogs');
  logsContainer.innerHTML = '';

  // Only show the most recent message
  if (messageLogs.length > 0) {
    const mostRecentLog = messageLogs[messageLogs.length - 1];
    const logEntry = document.createElement('p');
    const timestamp = new Date(mostRecentLog.timestamp);
    const formattedDate = `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    logEntry.textContent = `${formattedDate} - To: ${mostRecentLog.recipient} - Student: ${mostRecentLog.studentName || 'N/A'} (${mostRecentLog.studentRoll || 'N/A'}) - Parent: ${mostRecentLog.parentName || 'N/A'} - Status: ${mostRecentLog.status} - Platform: ${mostRecentLog.platform || 'SMS'} - Duration: ${mostRecentLog.duration || 'N/A'}`;
    logEntry.classList.add('fade-in');
    logsContainer.appendChild(logEntry);
  }

  // Add a message indicating there are more logs if applicable
  if (messageLogs.length > 1) {
    const moreLogsMessage = document.createElement('p');
    moreLogsMessage.textContent = `... and ${messageLogs.length - 1} more messages`;
    moreLogsMessage.style.fontStyle = 'italic';
    moreLogsMessage.style.color = '#666';
    logsContainer.appendChild(moreLogsMessage);
  }
}

function clearAllLogs() {
  if (confirm("Are you sure you want to clear all message logs? This action cannot be undone.")) {
    localStorageDatabase.clearAllLogs();
    messageLogs = [];
    updateMessageLogs();
    alert("All message logs have been cleared.");
  }
}

function callParent() {
  const parentPhone = document.getElementById('parentPhone').textContent;
  const studentName = document.getElementById('studentName').textContent;
  const studentRoll = document.getElementById('studentRoll').textContent;
  const parentName = document.getElementById('parentName').textContent;
  
  if (parentPhone) {
    const startTime = new Date();
    window.location.href = `tel:${parentPhone}`;
    
    // Create and show popup after 10 seconds
    setTimeout(() => {
      const popup = document.createElement('div');
      popup.style.position = 'fixed';
      popup.style.left = '50%';
      popup.style.top = '50%';
      popup.style.transform = 'translate(-50%, -50%)';
      popup.style.backgroundColor = 'white';
      popup.style.padding = '20px';
      popup.style.border = '1px solid black';
      popup.style.zIndex = '1000';
      popup.innerHTML = `
        <p>Was the call answered?</p>
        <button id="yesBtn">Yes</button>
        <button id="noBtn">No</button>
      `;
      document.body.appendChild(popup);

      document.getElementById('yesBtn').addEventListener('click', () => handleCallResponse(true));
      document.getElementById('noBtn').addEventListener('click', () => handleCallResponse(false));

      function handleCallResponse(wasAnswered) {
        const endTime = new Date();
        const duration = Math.round((endTime - startTime) / 1000); // Duration in seconds
        
        // Log the call
        const log = {
          sender: 'Dr. S M K M Abbas Ahmad',
          recipient: parentPhone,
          studentName: studentName,
          studentRoll: studentRoll,
          parentName: parentName,
          message: `Phone call to parent - ${wasAnswered ? 'Answered' : 'Not Answered'}`,
          timestamp: new Date().toISOString(),
          status: wasAnswered ? 'answered' : 'not answered',
          platform: 'Phone',
          duration: `${duration} seconds`
        };
        localStorageDatabase.saveMessage(log);
        fetchMessagesFromServer();
        document.body.removeChild(popup);
      }
    }, 10000);
  } else {
    alert('Parent phone number not available.');
  }
}

function callStudent() {
  const studentPhone = document.getElementById('studentPhone').textContent;
  
  if (studentPhone && studentPhone !== 'Not available') {
    window.location.href = `tel:${studentPhone}`;
  } else {
    alert('Student phone number not available.');
  }
}

function whatsappParent() {
  const customMessageArea = document.getElementById('customMessageArea');
  customMessageArea.style.display = 'block';
  const sendCustomMessageBtn = document.getElementById('sendCustomMessageBtn');
  sendCustomMessageBtn.onclick = sendCustomWhatsAppMessage;
}

function whatsappStudent() {
  const studentPhone = document.getElementById('studentPhone').textContent;
  const studentName = document.getElementById('studentName').textContent;
  const studentRoll = document.getElementById('studentRoll').textContent;
  const parentName = document.getElementById('parentName').textContent;
  
  if (studentPhone && studentPhone !== 'Not available') {
    const message = encodeURIComponent('Hello, this is a message from your faculty.');
    window.open(`https://wa.me/${studentPhone}?text=${message}`, '_blank');
    
    // Log the WhatsApp message
    const log = {
      sender: 'Dr. S M K M Abbas Ahmad',
      recipient: studentPhone,
      studentName: studentName,
      studentRoll: studentRoll,
      parentName: parentName,
      message: 'WhatsApp message sent to student',
      timestamp: new Date().toISOString(),
      status: 'sent',
      platform: 'WhatsApp'
    };
    localStorageDatabase.saveMessage(log);
    fetchMessagesFromServer();
  } else {
    alert('Student phone number not available.');
  }
}

function sendCustomWhatsAppMessage() {
  const parentPhone = document.getElementById('parentPhone').textContent;
  const studentName = document.getElementById('studentName').textContent;
  const studentRoll = document.getElementById('studentRoll').textContent;
  const parentName = document.getElementById('parentName').textContent;
  const customMessage = document.getElementById('customMessageContent').value;
  
  if (parentPhone && customMessage.trim() !== '') {
    const message = encodeURIComponent(customMessage);
    window.open(`https://wa.me/${parentPhone}?text=${message}`, '_blank');
    
    // Log the custom WhatsApp message
    const log = {
      sender: 'Dr. S M K M Abbas Ahmad',
      recipient: parentPhone,
      studentName: studentName,
      studentRoll: studentRoll,
      parentName: parentName,
      message: customMessage,
      timestamp: new Date().toISOString(),
      status: 'sent',
      platform: 'WhatsApp'
    };
    localStorageDatabase.saveMessage(log);
    fetchMessagesFromServer();
    
    // Clear and hide the custom message area
    document.getElementById('customMessageContent').value = '';
    document.getElementById('customMessageArea').style.display = 'none';
  } else {
    alert('Please enter a message and ensure parent phone number is available.');
  }
}

function exportMessageLogs() {
  const today = new Date();
  const dateString = today.toISOString().split('T')[0];
  const csvContent = "data:text/csv;charset=utf-8,"
    + "Timestamp,Sender,Recipient,Student Name,Roll Number,Parent Name,Message,Status,Platform,Duration\n"
    + messageLogs.map(e => {
      return `${e.timestamp},${e.sender},${e.recipient},${e.studentName || ''},${e.studentRoll || ''},${e.parentName || ''},${e.message},${e.status},${e.platform || 'SMS'},${e.duration || 'N/A'}`;
    }).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `message_logs_${dateString}.csv`);
  document.body.appendChild(link);
  link.click();
}

function callCR(rollNumber) {
  const cr = students.find(s => s.rollNumber === rollNumber);
  if (cr && cr.studentPhone) {
    window.location.href = `tel:${cr.studentPhone}`;
  } else {
    alert('Phone number not available for this CR.');
  }
}

function whatsappCR(rollNumber) {
  const cr = students.find(s => s.rollNumber === rollNumber);
  if (cr && cr.studentPhone) {
    const message = encodeURIComponent('Hello CR, this is a message from your faculty.');
    window.open(`https://wa.me/${cr.studentPhone}?text=${message}`, '_blank');
  } else {
    alert('WhatsApp number not available for this CR.');
  }
}

function openStudentsPage() {
  window.open('students.html', '_blank');
}

function sendBulkWhatsAppMessage(parentPhones, message) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}&phone=${parentPhones.join(',')}`;
  window.open(whatsappUrl, '_blank');
}

function sendBulkSMSMessage(parentPhones, message) {
  const smsUrl = `sms:?body=${encodeURIComponent(message)}&phone=${parentPhones.join(',')}`;
  window.location.href = smsUrl;
}

function sendBulkMessage(half) {
  const bulkMessageContent = document.getElementById('bulkMessageContent').value;
  if (bulkMessageContent.trim() === '') {
    alert('Please enter a message.');
    return;
  }

  const parentPhones = students.map(s => s.parentPhone);
  const halfSize = Math.ceil(parentPhones.length / 3);
  let phonesForHalf;

  if (half === 'first') {
    phonesForHalf = parentPhones.slice(0, halfSize);
  } else if (half === 'second') {
    phonesForHalf = parentPhones.slice(halfSize, halfSize * 2);
  } else if (half === 'third') {
    phonesForHalf = parentPhones.slice(halfSize * 2);
  }

  const whatsappBtn = document.getElementById('whatsappBtn');
  const smsBtn = document.getElementById('smsBtn');

  if (whatsappBtn.checked) {
    sendBulkWhatsAppMessage(phonesForHalf, bulkMessageContent);
  } else if (smsBtn.checked) {
    sendBulkSMSMessage(phonesForHalf, bulkMessageContent);
  } else {
    alert('Please select a platform (WhatsApp or SMS).');
  }

  // Log the bulk message
  phonesForHalf.forEach(phone => {
    const student = students.find(s => s.parentPhone === phone);
    const log = {
      sender: 'Dr. S M K M Abbas Ahmad',
      recipient: phone,
      studentName: student.name,
      studentRoll: student.rollNumber,
      parentName: student.parentName,
      message: bulkMessageContent,
      timestamp: new Date().toISOString(),
      status: 'sent',
      platform: whatsappBtn.checked ? 'WhatsApp' : 'SMS'
    };
    localStorageDatabase.saveMessage(log);
  });
  fetchMessagesFromServer();

  // Clear and hide the bulk message area
  document.getElementById('bulkMessageContent').value = '';
  document.getElementById('bulkMessageForm').style.display = 'none';
}

function sendBulkMessage(group) {
  const message = document.getElementById('bulkMessageContent').value;
  if (message.trim() === '') {
    alert('Please enter a message.');
    return;
  }

  let parentPhones = students.map(student => student.parentPhone);
  let startIndex, endIndex;

  switch (group) {
    case 'first':
      startIndex = 0;
      endIndex = 25;
      break;
    case 'second':
      startIndex = 25;
      endIndex = 50;
      break;
    case 'third':
      startIndex = 50;
      endIndex = parentPhones.length;
      break;
  }

  parentPhones = parentPhones.slice(startIndex, endIndex);
  const phoneNumbers = parentPhones.join(',');

  // Open SMS app with pre-filled message for bulk sending
  window.location.href = `sms:${phoneNumbers}?body=${encodeURIComponent(message)}`;

  // Log the bulk message
  parentPhones.forEach(phone => {
    const student = students.find(s => s.parentPhone === phone);
    const log = {
      sender: 'Dr. S M K M Abbas Ahmad',
      recipient: phone,
      studentName: student ? student.name : 'N/A',
      studentRoll: student ? student.rollNumber : 'N/A',
      parentName: student ? student.parentName : 'N/A',
      message: message,
      timestamp: new Date().toISOString(),
      status: 'sent',
      platform: 'SMS'
    };
    localStorageDatabase.saveMessage(log);
  });

  fetchMessagesFromServer();
}

// Add this function to add sample data (for testing purposes)
// document.addEventListener('DOMContentLoaded', addSampleData);
