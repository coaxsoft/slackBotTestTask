const axios = require("axios");

const fetcher = axios.create({
    baseURL: "https://slack.com/api/",
    headers: { 'Authorization': `Bearer ${process.env.SLACK_TOKEN}` }
});

async function openModal(trigger) {
    await fetcher.post(`views.open`, {
        "trigger_id": trigger,
        "view": {
            "title": {
                "type": "plain_text",
                "text": "Create new record"
            },
            "submit": {
                "type": "plain_text",
                "text": "Submit"
            },
            "blocks": [
                {
                    "block_id": "firstNameBlock",
                    "type": "input",
                    "element": {
                        "type": "plain_text_input",
                        "action_id": "firstName",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "John"
                        }
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "First name"
                    }
                },
                {
                    "block_id": "lastNameBlock",
                    "type": "input",
                    "element": {
                        "type": "plain_text_input",
                        "action_id": "lastName",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Doe"
                        }
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "Last name"
                    }
                }
            ],
            "type": "modal"
        }
    });
}

module.exports = {
    openModal
}