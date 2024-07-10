function deleteByEmail() {

    let all_emails1 = Array.from(document.querySelectorAll("tbody > tr > td:nth-child(2)"));
    let all_emails = all_emails1.map(c => c.textContent);

    let email_del = document.getElementsByTagName("input")[0].value;

    let fail = document.getElementById('result')

    if (!all_emails.includes(email_del)){
        fail.textContent = "Not found."
    }
    else{
        fail.textContent = "Deleted."
        let mail = all_emails1.filter(x => x.textContent == email_del)[0]
        mail.parentElement.remove();
    }





}
