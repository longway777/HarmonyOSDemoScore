package com.example.score;

import ohos.ace.ability.AceAbility;
import ohos.aafwk.content.Intent;
import ohos.agp.utils.LayoutAlignment;
import ohos.agp.window.dialog.ToastDialog;

import java.time.Clock;
import java.util.Timer;
import java.util.TimerTask;

public class MainAbility extends AceAbility {
    private long backPressed = 0;

    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
    }

    @Override
    public void onStop() {
        super.onStop();
    }

    @Override
    public void onBackPressed() {
        if (System.currentTimeMillis() - backPressed > 2000) {
            new ToastDialog(MainAbility.this)
                    .setText("双击结束")
                    .show();
            backPressed = System.currentTimeMillis();
            return;
        }
        super.onBackPressed();

    }
}
