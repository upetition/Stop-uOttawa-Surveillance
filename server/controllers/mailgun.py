import requests
from server.controllers.abc import EmailDriver
from jinja2 import Template
import logging


logger = logging.getLogger(__file__)


class MailgunDriver(EmailDriver):

    def __init__(self, api_key, mail_domain):
        if mail_domain == "":
            raise TypeError("Mail domain needs to be explicitly declared")
        self.domain = mail_domain
        self.api_key = api_key
        self.base_api_url = f"https://api.mailgun.net/v3/{mail_domain}/messages"
        with open('/app/server/templates/verification_email.jinja2', 'r') as fh:
            self.email_template = Template(fh.read())

    def send_validation_mail(self, target_name, target_email, link_id):
        logger.debug(
            "Rendered template %s",
            self.email_template.render(name=target_name, verification_id=link_id)
        )
        return requests.post(
            self.base_api_url,
            auth=("api", self.api_key),
            data={
                "from": f"noreply@{self.domain}",
                "to": [target_email],
                "subject": "Verify your email for uPetition!",
                "html": self.email_template.render(name=target_name, verification_id=link_id)
            }
        )
