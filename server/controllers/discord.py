import requests
from server.controllers.abc import SocialDriver
from jinja2 import Template
from bs4 import BeautifulSoup


class DiscordDriver(SocialDriver):
    def __init__(self, api_url):
        self.webhook_address = api_url
        with open('/app/server/templates/contactus_email.jinja2', 'r') as fh:
            self.contact_template = Template(fh.read())

    def post_comment(self, comment, **metadata):
        sender_name = metadata['name']
        sender_email = metadata['email']
        comment = comment

        rendered_template = self.contact_template.render(
            sender_name=sender_name,
            sender_email=sender_email,
            message=comment
        )

        clean_template = BeautifulSoup(rendered_template).get_text()

        return requests.post(
            self.webhook_address,
            json={
                'content': clean_template
            }
        )
