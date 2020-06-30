import requests
from server.controllers.abc import EmailDriver
from jinja2 import Template
import logging


logger = logging.getLogger(__file__)


class MailgunDriver(EmailDriver):

    def __init__(self, api_key, mail_domain, maintainer_email):
        if mail_domain == "":
            raise TypeError("Mail domain needs to be explicitly declared")
        self.domain = mail_domain
        self.api_key = api_key
        self.maintainer_email = maintainer_email
        self.base_api_url = f"https://api.mailgun.net/v3/{mail_domain}/messages"
        with open('/app/server/templates/verification_email.jinja2', 'r') as fh:
            self.email_template = Template(fh.read())
        with open('/app/server/templates/contactus_email.jinja2', 'r') as fh:
            self.contact_template = Template(fh.read())

    def _send(self, address, subject, contents):
        return requests.post(
            self.base_api_url,
            auth=("api", self.api_key),
            data={
                "from": f"noreply@{self.domain}",
                "to": [address],
                "subject": subject,
                "html": contents
            }
        )

    def send_validation_mail(self, target_name, target_email, link_id):
        rendered_template = self.email_template.render(
            name=target_name,
            verification_id=link_id
        )
        logger.debug(
            "Rendered template %s",
            rendered_template
        )

        return self._send(
            target_email,
            "Verify your email for uPetition!",
            self.email_template.render(name=target_name, verification_id=link_id)
        )

    def send_contact_mail(self, sender_name, sender_email, sender_comment):
        rendered_template = self.contact_template.render(
            sender_name=sender_name,
            sender_email=sender_email,
            message=sender_comment
        )
        logger.debug(
            "Rendered template %s",
            rendered_template
        )

        return self._send(
            self.maintainer_email,
            "Someone has sent a comment to uPetition!",
            rendered_template
        )
