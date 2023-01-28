document.getElementById('lastModified').textContent = `Last modification ${document.lastModified}`


function updateDescription() {
    const rangeSelected = document.getElementById("membership_level").value
    switch (rangeSelected) {
        case "1":
            document.getElementById("p_benefits_description").innerHTML = "NP Membership: It is for non profit organizations and there is no fee, you can participate in all meetings in the first seats, you will have access to all attendant's phone numbers and email addresses, you will be able to take snacks for free at the gatherings, you will be personally introduced to every executive working in managerial positions if time permits, you will be like an honor participant, because by being a non profit company you are giving to the world for free. There are educational programs that you and your employees can take advantage of, for example, some top universities offer Master degrees oriented to humanitarian work, these you can take for free and also your employees, these degrees have been evaluated by managers of several companies and they all agree that anyone holding one could be a great fit for the company."
            break
        case "2":
            document.getElementById("p_benefits_description").innerHTML = "Bronze membership: It is for companies that ear profit and desire just to start understanding what we do at this chamber of commerce, this is a very cheap subscription, so it will allow you to feel in touch with our network by a small fee, you will be allowed to the broad events in the back seats, and you will be able to watch the talks and hear from several managers exposing their ideas. If you desire to participate of the snacks there is a fee included at every gathering. You will be shown some of the most demanded degrees and skills needed, and you will be shown their price and the way to apply. You will be able to learn the names of several managers and lear in what companies they work, and you can make contacts in the gathering by your own initiative. This will allow you to see what we can accomplish together in this chamber of commerce"
            break
        case "3":
            document.getElementById("p_benefits_description").innerHTML = "Silver membership: It is for companies that desire to participate in all events and inmerse themselves in our gatherings, you will be allowed to participate in the middle seats, and even though you will not be introduced to anyone you can still contact as many people as you desire, you will have everybody's names in the gatherings, you will be allowed to participate of the food or snacks by a small fee, you will be shown the degrees and courses offered by certain universities, and several managers will show they perspective on how those degrees or skills are a good fit for jobs in their companies, and what you can do to be more prepared for those positions in those companies. You will be given a sticker with a silver color to show how valuable you are for the chamber"
            break
        case "4":
            document.getElementById("p_benefits_description").innerHTML = "Gold Membership: It has almost the same benefits of the non profit organizations, but you have to pay a high fee for that, you can participate in all meetings in the first seats, you will have access to all attendant's phone numbers and email addresses, you will be able to take snacks for free at the gatherings, you will be personally introduced to every executive working in managerial positions if time permits, you will be like an honor participant. There are educational programs that you and your employees can take advantage of, for example, some top universities offer Master degrees oriented to humanitarian work, these you can take and pay their corresponding fees, these degrees have been evaluated by managers of several companies and they all agree that anyone holding one could be a great fit for the company."
            break
        default:
            break
    }

}