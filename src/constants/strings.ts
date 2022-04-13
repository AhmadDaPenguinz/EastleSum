export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Nice job! Send a screenshot to @stfxreps on instagram to see if you won :)']
export const GAME_COPIED_MESSAGE = 'Copied!'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'You\'re missing letters!'
export const WORD_NOT_FOUND_MESSAGE = 'Not in the dictionary!'
export const HARD_MODE_ALERT_MESSAGE =
  'Should\'ve done it before the game began.'
export const HARD_MODE_DESCRIPTION =
  'Can you walk without stumbling?'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Colors Recalibrated!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Statistics'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'New word in'
export const SHARE_TEXT = 'Share'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
