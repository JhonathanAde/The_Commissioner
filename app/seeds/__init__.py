from flask.cli import AppGroup
from .users import seed_users, undo_users
from .commissions import seed_commissions, undo_commissions

seed_commands = AppGroup('seed')

@seed_commands.command('all')
def seed():
  seed_users()
  seed_commissions()

@seed_commands.command('undo')
def undo():
  undo_users()
  undo_commissions()